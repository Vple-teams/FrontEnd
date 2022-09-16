import React from 'react';
import {getItemUrl} from "../../recoil/state";
import {useNavigate} from "react-router-dom";
import Header from "../header/Header";
import {
    SelectBar,
    SearchContainer,
    ButtonWrap,
    ItemsBtn,
    CardSection,
    TitleWrap,
    CardContainer,
    CardWrap,
    RecommendContainer,
    RecommendTitleWrap,
    RecommendImageWrap,
    ContainerItemsWrap,
    RecommendItemsWrap
} from "./HomeStyle";
import arrow from '../../asset/arrow.png'
import Flag from '../../asset/flag.png';
import image from '../../asset/page1.jpg';
import image2 from '../../asset/page2.jpg';
// import arrow from '../../asset/arrow.png';

import { ButtonStyle } from '../../styles/ButtonStyle';
import {useRecoilState, useRecoilValue} from "recoil";

const Home = () => {

    const bestGuide = ['2박 3일 경주 여행', '1박 2일 부산 여행', '1박 2일 부산 여행', '1박 2일 부산 여행'];
    const bestRestaurant = ['연화바루', '비건버거', '비건포차'];
    const bestLocation = ['첨성대', '동궁 월지', '경주대릉'];
    const itemInfo = useRecoilValue(getItemUrl);

    let navigate = useNavigate();
    const onClickRouter = () => {
        navigate('/mate')
        window.scrollTo(0,0)
    }
    const routerGuide = () => {
        navigate('/view/guide')
        window.scrollTo(0,0)
    }
    const routerFood = () => {
        navigate('/view/restaurant')
        window.scrollTo(0,0)
    }
    const routerLocation = () => {
        navigate('/view/tour')
        window.scrollTo(0,0)
    }

    return (
        <>
            <Header />
            <SelectBar />
            <SearchContainer>
                <p className='userWrap'>
                    <span onClick={() => {console.log(itemInfo)}}>홍길동</span> 님,
                    <span>홍길동</span> 님,
                </p>
                <p className='textWrap'>비플 함께 친환경 여행을 떠나보세요!</p>
            </SearchContainer>

            <ButtonWrap>
                <ItemsBtn>나의 플랜</ItemsBtn>
                <ItemsBtn onClick={onClickRouter}>메이트</ItemsBtn>
            </ButtonWrap>

            <CardSection>
                <TitleWrap>
                    <div className='titleDeco'/>
                    <h3 className='recommendGuide'>추천 가이드</h3>
                    <ButtonStyle onClick={routerGuide}>
                        <img src={arrow} className='arrow'/>
                    </ButtonStyle>
                </TitleWrap>
                <CardContainer>
                    {bestGuide.map((value, index) => {
                        return (
                            <CardWrap onClick={routerGuide} >
                                <img src={image} className='tourImage'/>
                                <div className='cardInfoWrap'>
                                    <p className='cardTitle'>{value}</p>
                                    <span className='cardRecommend'>vple 추천</span>
                                </div>
                            </CardWrap>
                        )
                    })}
                </CardContainer>
            </CardSection>

            <RecommendContainer>
                <RecommendTitleWrap>
                    <div className='titleDeco'/>
                    <h3 className='recommendTitle'>추천 식당</h3>
                    <ButtonStyle onClick={routerFood}>
                        <img src={arrow} className='arrow'/>
                    </ButtonStyle>
                </RecommendTitleWrap>

                <ContainerItemsWrap>
                    <RecommendItemsWrap>
                        {
                            bestRestaurant.map((value, index) => {
                                return (
                                    <RecommendImageWrap onClick={routerFood}>
                                        <img src={image2} className='itemImage'/>
                                        <img src={Flag} className='flagIcon'/>
                                        <span className='itemsName'>{value}</span>
                                    </RecommendImageWrap>
                                )
                            })
                        }
                    </RecommendItemsWrap>
                </ContainerItemsWrap>
            </RecommendContainer>

            <RecommendContainer>
                <RecommendTitleWrap>
                    <div className='titleDeco'/>
                    <h3 className='recommendTitle'>추천 관광지</h3>
                    <ButtonStyle onClick={routerLocation}>
                        <img src={arrow} className='arrow'/>
                    </ButtonStyle>
                </RecommendTitleWrap>

                <ContainerItemsWrap>
                    <RecommendItemsWrap>
                        {
                            bestLocation.map((value, index) => {
                                return (
                                    <RecommendImageWrap onClick={routerLocation}>
                                        <img src={image2} className='itemImage'/>
                                        <img src={Flag} className='flagIcon'/>
                                        <span className='itemsName'>{value}</span>
                                    </RecommendImageWrap>
                                )
                            })
                        }
                    </RecommendItemsWrap>
                </ContainerItemsWrap>
            </RecommendContainer>
        </>
    )
}

export default Home;