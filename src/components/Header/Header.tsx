import * as S from './HeaderStyle';
import logoWhiteIcon from '../../assets/icons/logoWhiteIcon.png';

const Header = () => {
  return (
    <S.Container>
      <S.Logo src={logoWhiteIcon} />
      <S.Title>카공도</S.Title>
    </S.Container>
  );
};

export default Header;
