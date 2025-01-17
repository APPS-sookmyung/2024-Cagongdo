import React, { useEffect } from 'react';
import * as S from './MyPageStyle';

const MyPage: React.FC = () => {
  const cards = [
    '카드 1',
    '카드 2',
    '카드 3',
    '카드 4',
    '카드 5',
    '카드 6',
    '카드 7',
  ];

  const duplicatedCards = [...cards, ...cards]; // 카드 배열을 복제

  useEffect(() => {
    // 스크롤 방지
    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.AnimationLayout>
        {duplicatedCards.map((card, index) => (
          <S.FlowBox key={index}>
            <p>{card}</p>
          </S.FlowBox>
        ))}
      </S.AnimationLayout>
      <S.AnimationLayoutReverse>
        {duplicatedCards.map((card, index) => (
          <S.FlowBox key={index}>
            <p>{card}</p>
          </S.FlowBox>
        ))}
      </S.AnimationLayoutReverse>
    </S.Container>
  );
};

export default MyPage;
