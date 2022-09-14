import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Review from '../../components/review/Review';
// import { useRecoilValue } from 'recoil';
// import { getDetailRestaurantUrl } from '../../recoil/state';
import axios from 'axios';

import {
    ImageWrap,
    InfoDiv,
    TagContainer,
    ClipDiv,
    ClipButtonW,
    ClipButtonG,
    WrapInformation,
    WrapRunTime,
    MenuDiv,
    MenuTitle,
    MoreButton,
    ReviewDiv,
    ReviewTitle,
    WriteReviewBtn,
    ReviewBar,
    PercentBar,
    TagDiv,
    UpButton,


} from '../../pages/restaurantDetail/RestaurantDetailStyle';
import { ButtonStyle } from '../../styles/ButtonStyle';
import IconMapPointer from '../../asset/IconMapPointer.png';
import IconClock from '../../asset/IconClock.png';
import MenuCardButton from '../../components/menuCardButton/MenuCardButton';
import IconMore from '../../asset/IconMore.png';
import IconUp from '../../asset/IconUp.png';

export default function RestaurantDetail() {

    //화면 이동
    let navigate = useNavigate();
    const routerReview = () => {
        navigate('/review/restaurant')
        window.scrollTo(0,0)
    }

    const location = useLocation();
    const id = location.state.id;
    const name = location.state.name;
    const img = location.state.img;

    //식당 상세 정보 url 받아오기
    const [detailRestaurant, setDetailRestaurant] = useState([]);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios.get('https://vple-backend.all.gagark.shop/api/recommand/restaurant/'+id)
            .then(response => {
                setDetailRestaurant(response.data);
                setMenu(response.data.menus);
            });
    }, []);

    //클립
    const [isClip, setClip] = useState(false);

    //식당 리뷰
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
        <div  ref={topRef}>
            <DetailHeader title="식당"/>
            <ImageWrap>
                <img src={img} className='guide-image' />
            </ImageWrap>
            <InfoDiv>
                <div className="titleWrap">[ {name} ]</div>
                <ClipDiv>
                    <ButtonStyle onClick={() => setClip(!isClip)}>
                        {isClip ? <ClipButtonG /> : <ClipButtonW />}
                    </ButtonStyle>
                </ClipDiv>
                <TagContainer>
                    <TagDiv>{detailRestaurant.category}</TagDiv>
                </TagContainer>
                <div className="writerWrap">{detailRestaurant.introduction}</div>
                <div className="partition" />

                <WrapInformation>
                    <img src={IconMapPointer} className="icon" />
                    <div className="info">{detailRestaurant.address}</div>
                </WrapInformation>
                <WrapInformation>
                    <img src={IconClock} className="icon" />
                    <div className="info">영업시간</div>

                    <WrapRunTime>
                        <p className="day">{detailRestaurant.openTime}</p>
                    </WrapRunTime>

                    
                    {/* <WrapRunTime>
                        <p className="day">월 - 토</p><p className="hour">10:00 - 20:00</p>
                    </WrapRunTime>
                    <WrapRunTime>
                        <p className="day">일요일</p><p className="hour">휴무</p>
                    </WrapRunTime> */}

                </WrapInformation>
            </InfoDiv>


            <MenuDiv>
                <MenuTitle>
                    <div className='titleDeco' />
                    <h3 className='recommendTitle'>메뉴</h3>
                </MenuTitle>
                <ul>
                    {menu.map(value => (
                        <MenuCardButton
                            menu={value.name}
                            veganType={value.veganType}
                            img= {value.image}
                        />
                    ))}
                </ul>
                <MoreButton><img src={IconMore} className="iconMore" />더보기</MoreButton>
            </MenuDiv>

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