import * as S from './MyPageStyle';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar/TabBar';

const RecommendPage: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <p>준비 중입니다.</p>
      </S.Container>
      <TabBar />
    </>
  );
};

export default RecommendPage;
