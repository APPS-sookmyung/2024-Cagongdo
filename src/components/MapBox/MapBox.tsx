import { useEffect, useState, useRef } from 'react';
import * as s from './MapBoxStyle';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  const [mapInstance, setMapInstance] = useState<any>(null); // 카카오 맵 객체를 상태로 관리
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // mapContainer를 useRef로 관리
  const markersRef = useRef<any[]>([]); // 마커들과 커스텀 오버레이들을 함께 관리
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 검색어 상태

  // 카카오 맵을 상태로 관리할 때
  useEffect(() => {
    if (mapContainerRef.current && window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new kakao.maps.LatLng(37.54481860718933, 126.96826843333058), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainerRef.current, mapOption); // mapContainerRef.current를 사용
      setMapInstance(map); // mapInstance 상태에 카카오 맵 객체를 저장
    } else {
      console.error(
        '카카오 맵 API가 로드되지 않았거나 mapContainerRef가 null입니다.'
      );
    }
  }, []); // 컴포넌트 마운트 시 한 번만 실행되도록 설정

  // 지도 생성 후 카페 검색 및 마커 추가
  const searchCafes = () => {
    if (mapInstance) {
      // 카카오 맵의 Places 객체 생성
      const places = new kakao.maps.services.Places();
      const center = mapInstance.getCenter(); // 현재 지도 중심 좌표
      const lat = center.getLat(); // 위도
      const lng = center.getLng(); // 경도

      // 카페 검색 (카테고리: CE7 - 카페)
      places.categorySearch(
        'CE7',
        (data, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            // 마커와 텍스트(커스텀 오버레이) 삭제
            markersRef.current.forEach(({ marker, label }) => {
              marker.setMap(null);
              label.setMap(null);
            });
            markersRef.current = []; // 이전 마커와 오버레이들을 제거

            // 새로운 마커와 텍스트(커스텀 오버레이) 추가
            data.forEach((place) => {
              const markerPosition = new kakao.maps.LatLng(
                Number(place.y), // 위도 (string -> number 변환)
                Number(place.x) // 경도 (string -> number 변환)
              );

              const marker = new kakao.maps.Marker({
                position: markerPosition, // 마커의 위치
                title: place.place_name, // 마커 툴팁(제목)
              });

              // 마커를 지도에 추가
              marker.setMap(mapInstance);

              // 커스텀 오버레이 (텍스트 표시)
              const label = new kakao.maps.CustomOverlay({
                position: markerPosition, // 마커 아래에 텍스트를 표시할 위치
                content: `<div style="background-color: white; padding: 5px; border-radius: 3px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); font-size: 14px;">${place.place_name}</div>`, // 카페 이름을 표시
                xAnchor: 0.5, // 텍스트의 x축 기준 위치 (마커 중앙에 오도록 설정)
                yAnchor: 1.5, // 텍스트의 y축 기준 위치 (마커 아래로 표시되도록 설정)
              });

              // 커스텀 오버레이를 지도에 추가
              label.setMap(mapInstance);

              // 마커와 텍스트를 함께 markersRef에 저장
              markersRef.current.push({ marker, label });
            });
            // 검색 결과 콘솔에 출력
            console.log('검색된 카페들:', data);
          } else {
            console.error('장소 검색 실패', status);
          }
        },
        {
          location: new kakao.maps.LatLng(lat, lng), // 지도 중심을 기준으로 검색
          radius: 5000, // 검색 반경 (단위: 미터)
        }
      );
    }
  };

  useEffect(() => {
    if (mapInstance) {
      // 카페 검색을 수행
      searchCafes();

      // 지도 이동 시 카페 검색을 재시도
      kakao.maps.event.addListener(mapInstance, 'dragend', searchCafes);
      kakao.maps.event.addListener(mapInstance, 'zoom_changed', searchCafes);
    }
  }, [mapInstance]); // mapInstance가 변경될 때마다 실행

  // 검색어 입력 시 Enter 키를 눌렀을 때 처리
  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchKeyword.trim() !== '') {
      if (mapInstance) {
        const places = new kakao.maps.services.Places();
        const center = mapInstance.getCenter(); // 현재 지도 중심 좌표
        const lat = center.getLat(); // 위도
        const lng = center.getLng(); // 경도

        // 키워드 검색
        places.keywordSearch(
          searchKeyword,
          (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              // 마커와 텍스트(커스텀 오버레이) 삭제
              markersRef.current.forEach(({ marker, label }) => {
                marker.setMap(null);
                label.setMap(null);
              });
              markersRef.current = []; // 이전 마커와 오버레이들을 제거

              // 검색된 장소 중 카페(카테고리 CE7)만 필터링
              const cafePlaces = data.filter(
                (place) => place.category_group_code === 'CE7'
              );

              // 새로운 마커와 텍스트(커스텀 오버레이) 추가
              cafePlaces.forEach((place) => {
                const markerPosition = new kakao.maps.LatLng(
                  Number(place.y),
                  Number(place.x)
                );

                const marker = new kakao.maps.Marker({
                  position: markerPosition,
                  title: place.place_name,
                });

                marker.setMap(mapInstance);

                const label = new kakao.maps.CustomOverlay({
                  position: markerPosition,
                  content: `<div style="background-color: white; padding: 5px; border-radius: 3px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); font-size: 14px;">${place.place_name}</div>`,
                  xAnchor: 0.5,
                  yAnchor: 1.5,
                });

                label.setMap(mapInstance);

                // 마커와 텍스트를 함께 markersRef에 저장
                markersRef.current.push({ marker, label });
              });

              // 검색된 카페들을 콘솔에 출력
              console.log('검색된 카페들:', cafePlaces);
            } else {
              console.error('장소 검색 실패', status);
            }
          },
          {
            location: new kakao.maps.LatLng(lat, lng), // 지도 중심을 기준으로 검색
            radius: 5000, // 검색 반경 (단위: 미터)
          }
        );
      }
    }
  };

  return (
    <s.Container>
      <div
        id="map"
        ref={mapContainerRef}
        style={{ width: '100%', height: '100%' }}
      >
        <div>
          <s.SearchBox
            placeholder="카페를 검색해보세요"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={handleSearchKeyPress}
          />
        </div>
      </div>
    </s.Container>
  );
};

export default MapBox;
