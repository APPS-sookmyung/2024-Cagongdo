import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as s from './MapBoxStyle';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  const [markers, setMarkers] = useState<any[]>([]); // 마커 데이터를 상태로 관리

  // 장소 검색 완료 시 호출되는 콜백 함수
  function placesSearchCB(data: any[], status: any) {
    if (status === window.kakao.maps.services.Status.OK) {
      const newMarkers = data.map((place) => ({
        lat: place.y,
        lng: place.x,
        name: place.place_name,
        address: place.address_name,
        phone: place.phone,
        placeUrl: place.place_url,
      }));
      setMarkers(newMarkers); // 마커들을 상태로 설정하여 지도에 표시
    }
  }

  // 장소 검색 객체를 생성하고, 마커들을 업데이트하는 함수
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      // 카카오 맵 API가 로드된 후에 실행

      const mapOption = {
        center: new window.kakao.maps.LatLng(
          37.54481860718933,
          126.96826843333058
        ), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(
        document.getElementById('map'),
        mapOption
      ); // 지도를 생성합니다
      const ps = new window.kakao.maps.services.Places(map); // 장소 검색 객체 생성

      // '카페' 카테고리(CE7)로 장소를 검색합니다
      ps.categorySearch('CE7', placesSearchCB, { useMapBounds: true });

      // 장소 검색 완료 시 호출되는 콜백 함수입니다
    } else {
      console.error('카카오 맵 API가 로드되지 않았습니다.');
    }
  }, []); // 컴포넌트가 마운트될 때만 실행

  return (
    <s.Container>
      {/* react-kakao-maps-sdk의 Map 컴포넌트로만 지도를 표시 */}
      <Map
        id="map"
        center={{ lat: 37.54481860718933, lng: 126.96826843333058 }} // 기본 지도 중심
        level={3} // 확대 수준
        style={{ width: '100%', height: '350px' }} // 지도 크기 설정
      >
        {markers.map((marker, index) => (
          <MapMarker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }} // 마커의 위치
          >
            {/* 마커 클릭 시 장소의 정보를 표시 */}
            <div style={{ color: '#000' }}>
              <strong>{marker.name}</strong>
              <br />
              {marker.address}
            </div>
          </MapMarker>
        ))}
      </Map>
    </s.Container>
  );
};

export default MapBox;
