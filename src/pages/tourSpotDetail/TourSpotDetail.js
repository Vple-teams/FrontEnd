import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import React, { useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Review from '../../components/review/Review';
import {
    ImageWrap,
    InfoDiv,
    ClipDiv,
    ClipButtonW,
    ClipButtonG,
    WrapInformation,
    WrapRunTime,
    ReviewDiv,
    ReviewTitle,
    WriteReviewBtn,
    ReviewBar,
    PercentBar,
    UpButton,

} from '../../pages/tourSpotDetail/TourSpotDetailStyle';
import { ButtonStyle } from '../../styles/ButtonStyle';
import IconMapPointer from '../../asset/IconMapPointer.png';
import IconClock from '../../asset/IconClock.png';
import IconUp from '../../asset/IconUp.png';

export default function GuideDetail() {

    //화면 이동
    let navigate = useNavigate();
    const routerReview = () => {
        navigate('/review/tour')
        window.scrollTo(0,0)
    }

    //const location = useLocation();

    const [isClip, setClip] = useState(false);

    const cards = [
        { menu: '징거', price: '165000' },
        { menu: '뽀빠이', price: '13000' },
        { menu: '레드풀', price: '12500' },
    ];

    const reviews = [
        { review1: 1 },
        { review2: 2 },
        { review1: 3 },
        { review2: 4 },
        { review1: 5 },
        { review2: 6 },
    ];

    //스크롤
    const topRef = useRef(null);
    const scrollToUp = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={topRef}>
            <DetailHeader title="관광지" />
            <ImageWrap>
                <img src={tempGuide} className='guide-image' />
            </ImageWrap>
            <InfoDiv>
                <div className="titleWrap">{"[첨성대]"}</div>
                <ClipDiv>
                    <ButtonStyle onClick={() => setClip(!isClip)}>
                        {isClip ? <ClipButtonG /> : <ClipButtonW />}
                    </ButtonStyle>
                </ClipDiv>
                <div className="writerWrap">{"경상북도 경주시에 있는 삼국시대 신라 시기의 천문관측소. 천문관측시설. 국보."}</div>
                <div className="partition" />

                <WrapInformation>
                    <img src={IconMapPointer} className="icon" />
                    <div className="info">서울 서대문구 이화여대길 52-31</div>
                </WrapInformation>
                <WrapInformation>
                    <img src={IconClock} className="icon" />
                    <div className="info">영업시간</div>
                    <WrapRunTime>
                        <p className="day">월 - 토</p><p className="hour">10:00 - 20:00</p>
                    </WrapRunTime>
                    <WrapRunTime>
                        <p className="day">일요일</p><p className="hour">휴무</p>
                    </WrapRunTime>
                </WrapInformation>
            </InfoDiv>


            <ReviewDiv >
            <div className='container'>
                    <ReviewTitle>
                        <div className='titleDeco' />
                        <h3 className='recommendTitle'>후기</h3>
                        <p className='number'>(14)</p>
                    </ReviewTitle>
                    <div className='align-right'>
                        
                    <WriteReviewBtn onClick={routerReview}>작성하기</WriteReviewBtn>
                    </div>
                </div>

                <ReviewBar>
                    <PercentBar count={80}>
                        <div className='review'> 😊 "음식이 맛있어요"</div>
                    </PercentBar>
                </ReviewBar>
                <ReviewBar>
                    <PercentBar count={60}>
                        <div className='review'> 🌿 “재료가 신선해요”</div>
                    </PercentBar>
                </ReviewBar>
                <ReviewBar>
                    <PercentBar count={30}>
                        <div className='review'> 💖 “친절해요”</div>
                    </PercentBar>
                </ReviewBar>

                <div className="partition" />

                {reviews.map(review => (

                    <Review />
                ))}

                <UpButton onClick={scrollToUp}>
                    <img src={IconUp} className='icon' /> 맨 위로
                </UpButton>
            </ReviewDiv>
        </div>
    );
}