import * as S from './RecommendPageStyle';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar/TabBar';

const RecommendPage: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <p>Recommend Page</p>
      </S.Container>
      <TabBar />
    </>
  );
};

export default RecommendPage;
