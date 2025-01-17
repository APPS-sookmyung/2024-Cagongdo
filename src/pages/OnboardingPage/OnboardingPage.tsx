import * as S from './OnboardingPageStyle';

import onboardingImg from '../../assets/imgs/onboardingImg.png';

const OnboardingPage = () => {
  return (
    <S.Container>
      <S.Logo src={onboardingImg} />
      <S.LoginButton to="/map">시작하기</S.LoginButton>
    </S.Container>
  );
};

export default OnboardingPage;
