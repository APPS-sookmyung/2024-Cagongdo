import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as s from './MapBoxStyle';
const MapBox = () => {
  return (
    <s.Container>
      <Map
        center={{ lat: 37.54481860718933, lng: 126.96826843333058 }}
        className="map"
      >
        <MapMarker
          position={{ lat: 37.54643849947151, lng: 126.9647258470644 }}
        >
          {/* <div style={{ color: '#000' }}>숙명여자대학교</div> */}
        </MapMarker>
      </Map>
    </s.Container>
  );
};

export default MapBox;
