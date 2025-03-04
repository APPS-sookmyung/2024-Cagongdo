import Header from '../../components/Header/Header';
import MapBox from '../../components/MapBox/MapBox';
import * as S from './MapPageStyle';

const MapPage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <MapBox />
      {/* <TabBar /> */}
    </S.Container>
  );
};

export default MapPage;
