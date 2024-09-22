import * as S from './OnboardingPageStyle';

import onboardingImg from '../../assets/imgs/onboardingImg.png';

const OnboardingPage = () => {
  return (
    <S.Container>
      <S.Logo src={onboardingImg} />
      <S.LoginButton to="/map">로그인</S.LoginButton>
    </S.Container>
  );
};

export default OnboardingPage;
