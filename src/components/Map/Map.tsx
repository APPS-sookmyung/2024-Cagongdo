import React, { useEffect, useState, useRef } from 'react';
import * as s from './MapStyle';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // ref를 사용하여 map container DOM 요소를 가져옴

  // 1) 카카오맵 불러오기 및 초기 위치 설정
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = mapContainerRef.current; // ref로 컨테이너 DOM 요소 가져오기
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(
            37.54481860718933,
            126.96826843333058
          ), // 기본 위치 (위도, 경도)
          level: 3,
        };

        const newMap = new window.kakao.maps.Map(container, options);
        setMap(newMap);

        const newMarker = new window.kakao.maps.Marker();
        setMarker(newMarker);
      }
    });
  }, []);

  // 2) 현재 위치 가져오기
  const getCurrentLocation = (newMap: any, newMarker: any) => {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        const currentPos = new window.kakao.maps.LatLng(
          pos.coords.latitude, // 위도
          pos.coords.longitude // 경도
        );

        // 지도 이동
        newMap.panTo(currentPos);

        // 기존 마커를 제거하고 새로운 마커를 설정
        newMarker.setMap(null);
        newMarker.setPosition(currentPos);
        newMarker.setMap(newMap);
      },
      () => alert('위치 정보를 가져오는데 실패했습니다.'),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 버튼을 클릭하면 현재 위치로 다시 이동
  const getCurrentPosBtn = () => {
    if (map && marker) {
      getCurrentLocation(map, marker);
    }
  };

  return (
    <s.Container>
      <s.MapContainer ref={mapContainerRef}></s.MapContainer>
      <s.CurrentPosBtn onClick={getCurrentPosBtn}>현재 위치</s.CurrentPosBtn>
    </s.Container>
  );
}
