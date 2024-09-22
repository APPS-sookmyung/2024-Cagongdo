import * as S from './MyPageStyle';
import Header from '../../components/Header/Header';
import TabBar from '../../components/TabBar/TabBar';

const MyPage: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <p>My Page</p>
      <TabBar />
    </S.Container>
  );
};

export default MyPage;
