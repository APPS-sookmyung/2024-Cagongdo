import * as S from './MapPageStyle';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import TabBar from '../../components/TabBar/TabBar';

const MapPage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Map />
      <TabBar />
    </S.Container>
  );
};

export default MapPage;
