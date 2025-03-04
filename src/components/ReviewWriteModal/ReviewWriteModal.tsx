import React, { useState } from 'react';
import * as S from './ReviewWriteModalStyle';

interface ReviewWriteModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlace: any;
}

const ReviewWriteModal: React.FC<ReviewWriteModalProps> = ({
  setIsModalOpen,
  selectedPlace,
}) => {
  const [rating, setRating] = useState<number | string>('');
  const [hours, setHours] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [outlet, setOutlet] = useState('');
  const [light, setLight] = useState('');
  const [noise, setNoise] = useState('');
  const [reviewContent, setReviewContent] = useState('');
  const [hashtags, setHashtags] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const reviewData = {
      rating,
      hours,
      price,
      outlet,
      light,
      noise,
      reviewContent,
      hashtags: hashtags.split(',').map((tag) => tag.trim()),
    };

    console.log('reviewData: ', reviewData);
    closeModal();
  };

  if (!selectedPlace) {
    return null;
  }

  return (
    <S.Overlay>
      <S.Container>
        <S.Title>
          카공 정보
          <S.Button onClick={handleSubmit}>작성 완료</S.Button>
        </S.Title>
        <S.Content>
          <S.FormField>
            <S.Label>
              카공 만족도
              <S.Input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="1 ~ 10점 사이 숫자로 입력해주세요."
                min={1}
                max={10}
              />
            </S.Label>
            <S.Label>
              영업시간
              <S.Input
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="11:00 ~ 19:00"
              />
            </S.Label>

            <S.Label>
              최소 가격
              <S.Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="5000"
              />
            </S.Label>
            <S.Label>
              콘센트
              <S.Input
                value={outlet}
                onChange={(e) => setOutlet(e.target.value)}
                placeholder="많음 / 보통 / 적음 / 없음"
              />
            </S.Label>
            <S.Label>
              조명 밝기
              <S.Input
                value={light}
                onChange={(e) => setLight(e.target.value)}
                placeholder="매우 밝음 / 적당히 밝음 / 약간 어두움 / 매우 어두움"
              />
            </S.Label>
            <S.Label>
              소음 수준
              <S.Input
                value={noise}
                onChange={(e) => setNoise(e.target.value)}
                placeholder="매우 조용 / 약간 조용 / 적당히 시끄러움 / 매우 시끄러움"
              />
            </S.Label>
            <S.Label>
              리뷰
              <S.Textarea
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                placeholder="카공에 적합한 카페였나요? 카공 후기를 적어주세요."
              />
            </S.Label>
            <S.Label>
              해시태그
              <S.Input
                value={hashtags}
                onChange={(e) => setHashtags(e.target.value)}
                placeholder="콤마(,)로 구분하여 써주세요. 최대 3개"
              />
            </S.Label>
          </S.FormField>
        </S.Content>
      </S.Container>
    </S.Overlay>
  );
};

export default ReviewWriteModal;
