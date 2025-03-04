import { useEffect, useRef, useState } from 'react';
import ReviewModal from '../ReviewModal/ReviewModal';
import ReviewWriteModal from '../ReviewWriteModal/ReviewWriteModal';
import * as s from './MapBoxStyle';

declare global {
  interface Window {
    kakao: any;
  }
}

const Storage = [
  {
    place_name: '청파맨션',
    id: '12684115',
  },
  {
    place_name: '킷테',
    id: '559536248',
  },
];

const MapBox = () => {
  const [mapInstance, setMapInstance] = useState<any>(null); // 카카오 맵 객체 상태
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // 맵 컨테이너 참조
  const markersRef = useRef<any[]>([]); // 일반 검색 마커 관리
  const storageMarkersRef = useRef<any[]>([]); // Storage 마커 관리
  const blueMarkersRef = useRef<any[]>([]); // 파란 마커 관리
  const [StorageMarkerData, setStorageMarkerData] = useState<any[]>([]); // Storage의 위치 데이터를 저장
  const [searchKeyword, setSearchKeyword] = useState<string>(''); // 검색어 상태
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // 모달 열림 여부 상태
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false); // 모달 열림 여부 상태

  const [selectedPlace, setSelectedPlace] = useState<any>(null); // 선택된 장소 정보


  // 카카오 맵 초기화
  useEffect(() => {
    if (mapContainerRef.current && window.kakao && window.kakao.maps) {
      const mapOption = {
        center: new kakao.maps.LatLng(37.54481860718933, 126.96826843333058), // 초기 중심 좌표
        level: 3, // 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainerRef.current, mapOption); // 맵 생성
      setMapInstance(map); // 맵 객체 상태 저장
    } else {
      console.error(
        '카카오 맵 API가 로드되지 않았거나 mapContainerRef가 null입니다.'
      );
    }
  }, []);

  // Storage에서 place_name으로 검색 후 위치 데이터 추출
  const fetchStorageMarkerData = async () => {
    if (!mapInstance) return;

    const places = new kakao.maps.services.Places();
    const allData: any[] = [];

    for (const place of Storage) {
      const result = await new Promise<any | null>((resolve) => {
        places.keywordSearch(place.place_name, (data, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            // 검색 결과에서 id가 일치하는 데이터 필터링
            const matchedPlace = data.find((p: any) => p.id === place.id);
            resolve(matchedPlace || null);
          } else {
            resolve(null);
          }
        });
      });

      if (result && result.x && result.y) {
        allData.push(result); // 데이터를 전체적으로 저장
      }
    }

    setStorageMarkerData(allData); // 저장된 모든 데이터를 상태로 저장
  };

  // StorageMarkerData에 있는 장소들에 빨간 마커 추가
  const addStorageMarkers = () => {
    if (!mapInstance || StorageMarkerData.length === 0) return;

    // 이전에 생성된 마커 제거
    storageMarkersRef.current.forEach(({ marker, label }) => {
      marker.setMap(null);
      label.setMap(null);
    });
    storageMarkersRef.current = [];

    StorageMarkerData.forEach((place) => {
      const markerPosition = new kakao.maps.LatLng(
        Number(place.y),
        Number(place.x)
      );

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: place.place_name,
        image: new kakao.maps.MarkerImage(
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
          new kakao.maps.Size(24, 35)
        ),
      });

      marker.setMap(mapInstance);

      const label = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: `<div style="background-color: white; padding: 5px; border-radius: 3px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3); font-size: 14px; cursor: pointer; color: red;">${place.place_name}</div>`,
        xAnchor: 0.5,
        yAnchor: 1.5,
      });

      label.setMap(mapInstance);

      storageMarkersRef.current.push({ marker, label });

      kakao.maps.event.addListener(marker, 'click', () => {
        setSelectedPlace(place);
        setIsModalOpen(true);
      });

      kakao.maps.event.addListener(label, 'click', () => {
        setSelectedPlace(place);
        setIsModalOpen(true);
      });
    });
  };

  // 카페 검색
  const searchCafes = () => {
    if (mapInstance) {
      const places = new kakao.maps.services.Places();
      const center = mapInstance.getCenter(); // 현재 지도 중심 좌표
      const lat = center.getLat(); // 위도
      const lng = center.getLng(); // 경도

      places.categorySearch(
        'CE7', // 카테고리: CE7 - 카페
        (data, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            blueMarkersRef.current.forEach(({ marker, label }) => {
              marker.setMap(null);
              label.setMap(null);
            });
            blueMarkersRef.current = [];

            data.forEach((place) => {
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

              blueMarkersRef.current.push({ marker, label });

              kakao.maps.event.addListener(marker, 'click', () => {
                setSelectedPlace(place);
                setIsModalOpen(true);
              });

              kakao.maps.event.addListener(label, 'click', () => {
                setSelectedPlace(place);
                setIsModalOpen(true);
              });
            });
          } else {
            console.error('카페 검색 실패:', status);
          }
        },
        {
          location: new kakao.maps.LatLng(lat, lng),
          radius: 5000, // 검색 반경 5km
        }
      );
    }
  };

  const handleSearch = () => {
    if (!mapInstance) return;

    const places = new kakao.maps.services.Places();

    // 모든 마커 제거
    markersRef.current.forEach(({ marker, label }) => {
      marker.setMap(null);
      label.setMap(null);
    });
    markersRef.current = [];

    blueMarkersRef.current.forEach(({ marker, label }) => {
      marker.setMap(null);
      label.setMap(null);
    });
    blueMarkersRef.current = [];

    storageMarkersRef.current.forEach(({ marker, label }) => {
      marker.setMap(null);
      label.setMap(null);
    });
    storageMarkersRef.current = [];

    // 검색어가 빈 문자열일 때 빨간 마커 추가하고, 카페 카테고리로 검색
    if (searchKeyword.trim() === '') {
      addStorageMarkers(); // 빨간 마커 추가
      searchCafes(); // 카페 검색
    } else {
      places.keywordSearch(searchKeyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 기존 마커 제거
          markersRef.current.forEach(({ marker, label }) => {
            marker.setMap(null);
            label.setMap(null);
          });
          markersRef.current = [];

          // 검색된 장소로 파란 마커 추가
          data.forEach((place: any) => {
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

            blueMarkersRef.current.push({ marker, label });

            kakao.maps.event.addListener(marker, 'click', () => {
              setSelectedPlace(place);
              setIsModalOpen(true);
            });

            kakao.maps.event.addListener(label, 'click', () => {
              setSelectedPlace(place);
              setIsModalOpen(true);
            });
          });
        } else {
          console.error('검색 실패:', status);
        }
      });
    }
  };

  // 검색 키 입력 처리
  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // 초기화 및 맵 설정
  useEffect(() => {
    if (mapInstance) {
      // Storage 위치 데이터 가져오기
      fetchStorageMarkerData();
    }
  }, [mapInstance]);

  // StorageMarkerData가 업데이트될 때 마커 표시
  useEffect(() => {
    if (StorageMarkerData.length > 0) {
      addStorageMarkers();
    }
  }, [StorageMarkerData]);

  console.log(selectedPlace);

  return (
    <>
      <s.Container>
        <div
          id="map"
          ref={mapContainerRef}
          style={{ width: '100%', height: '100%' }}
        >
          <s.SearchBox
            placeholder="장소를 검색해보세요"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={handleSearchKeyPress}
          />
        </div>
      </s.Container>
      {isModalOpen && selectedPlace && (
        <ReviewModal
          setIsModalOpen={setIsModalOpen}
          selectedPlace={selectedPlace}
          setIsWriteModalOpen={setIsWriteModalOpen}
        />
      )}
      {isWriteModalOpen && selectedPlace && (
        <ReviewWriteModal
          setIsModalOpen={setIsWriteModalOpen}
          selectedPlace={selectedPlace}
        />
      )}
    </>
  );
};

export default MapBox;
