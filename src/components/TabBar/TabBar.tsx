import * as S from './TabBarStyle';
import { Link } from 'react-router-dom';
import mapIcon from '../../assets/icons/mapIcon.png';

const TabBar = () => {
  return (
    <S.Container>
      <S.TabContainer>
        <Link to="/map">
          <S.IconBox>
            <S.IconImg src={mapIcon} />
            <S.Text>지도</S.Text>
          </S.IconBox>
        </Link>
        <Link to="/recommend">
          <S.IconBox>
            <S.IconImg src={mapIcon} />
            <S.Text>추천</S.Text>
          </S.IconBox>
        </Link>
        <Link to="/cafe-list">
          <S.IconBox>
            <S.IconImg src={mapIcon} />
            <S.Text>목록</S.Text>
          </S.IconBox>
        </Link>
        <Link to="/my-page">
          <S.IconBox>
            <S.IconImg src={mapIcon} />
            <S.Text>마이</S.Text>
          </S.IconBox>
        </Link>
      </S.TabContainer>
    </S.Container>
  );
};

export default TabBar;
