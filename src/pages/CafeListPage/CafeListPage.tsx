import * as S from './CafeListPageStyle';
import Header from '../../components/Header/Header';
import ReviewList from '../../components/ReviewList/ReviewList';
import TabBar from '../../components/TabBar/TabBar';

const CafeListPage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <ReviewList />
      <TabBar />
    </S.Container>
  );
};

export default CafeListPage;
