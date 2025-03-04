import React from 'react';
import {
  close,
  light_brown,
  noise_brown,
  outlet_brown,
  price_brown,
} from '../../assets/icons';
import { review } from '../../data/reviewDetail';
import * as S from './ReviewModalStyle';

interface ReviewModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPlace: any;
  setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  setIsModalOpen,
  selectedPlace,
  setIsWriteModalOpen,
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!selectedPlace) {
    return null;
  }

  return (
    <S.Overlay>
      <S.Container>
        <S.Content>
          <S.ImagesContainer>
            <S.ImageShadow />
            <S.MainImageContainer>
              <S.MainImage src={review.img} alt={selectedPlace.place_name} />
            </S.MainImageContainer>
            <S.AdditionalImagesContainer>
              <S.AdditionalImage src={review.img} alt={review.title} />
              <S.CloseBtnContainer>
                <S.CloseBtn
                  onClick={closeModal}
                  src={close}
                  alt="닫기"
                ></S.CloseBtn>

                <S.AdditionalImage src={review.img} alt={review.title} />
              </S.CloseBtnContainer>
              <S.AdditionalImage src={review.img} alt={review.title} />
              <S.AdditionalImage src={review.img} alt={review.title} />
            </S.AdditionalImagesContainer>
          </S.ImagesContainer>
          <S.Body>
            <S.Title>{selectedPlace.place_name}</S.Title>
            <S.Location>
              <p>
                📍{' '}
                {selectedPlace.road_address_name || selectedPlace.address_name}
              </p>
            </S.Location>
            <S.DetailOptionList>
              <S.DetailOption>
                <S.DetailOptionIcon src={price_brown} alt="price" />
                <S.DetailOptionDescription>가격</S.DetailOptionDescription>
                <S.DetailOptionValue>
                  {`${review.price}부터~` || '정보 없음'}
                </S.DetailOptionValue>
              </S.DetailOption>
              <S.DetailOption>
                <S.DetailOptionIcon src={outlet_brown} alt="outlet" />
                <S.DetailOptionDescription>콘센트</S.DetailOptionDescription>
                <S.DetailOptionValue>
                  {review.outlet || '정보 없음'}
                </S.DetailOptionValue>
              </S.DetailOption>
              <S.DetailOption>
                <S.DetailOptionIcon src={light_brown} alt="light" />
                <S.DetailOptionDescription>조명</S.DetailOptionDescription>
                <S.DetailOptionValue>
                  {review.light || '정보 없음'}
                </S.DetailOptionValue>
              </S.DetailOption>
              <S.DetailOption>
                <S.DetailOptionIcon src={noise_brown} alt="noise" />
                <S.DetailOptionDescription>소음</S.DetailOptionDescription>
                <S.DetailOptionValue>
                  {review.noise || '정보 없음'}
                </S.DetailOptionValue>
              </S.DetailOption>
            </S.DetailOptionList>
            <S.Line />
            <S.InfoContainer>
              <S.InfoLeft>
                <p>카공 만족도</p>
                <p>영업시간</p>
                <p>전화번호</p>
                <p>카카오 지도 링크</p>
              </S.InfoLeft>
              <S.InfoRight>
                <p>☕️ {review.star}</p>
                <p>{review.openClose || '(정보 없음)'}</p>
                <p>{selectedPlace.phone || '정보 없음'}</p>
                <p>
                  <a
                    href={selectedPlace.place_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    링크 열기
                  </a>
                </p>
              </S.InfoRight>
            </S.InfoContainer>
            <S.Line />
            <S.ReviewContentContainer>
              <S.ReviewWrite onClick={() => setIsWriteModalOpen(true)}>
                카공 정보 작성
              </S.ReviewWrite>
              <S.ReviewContent>
                <S.ReviewLeft>
                  <S.ReviewText>{review.content || ''}</S.ReviewText>
                  <S.ReviewHashtagContainer>
                    {review.hashtag.map((hashtag, idx) => (
                      <S.ReviewHashtag key={idx}>#{hashtag}</S.ReviewHashtag>
                    ))}
                  </S.ReviewHashtagContainer>
                </S.ReviewLeft>
                <S.ReviewImage src={review.img} alt={review.title} />
              </S.ReviewContent>
            </S.ReviewContentContainer>
          </S.Body>
        </S.Content>
      </S.Container>
    </S.Overlay>
  );
};

export default ReviewModal;
