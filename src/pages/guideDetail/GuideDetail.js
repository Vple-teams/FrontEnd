import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import { useLocation } from 'react-router-dom';
import React, { useState } from "react";


import {
    ImageWrap,
    ContentDiv,
    ClipButtonW,
    ClipButtonG,
    EditButton,
    ClipDiv,
    PlanDiv,
    TimeButton,
    CardDiv,


} from '../../pages/guideDetail/GuideDetailStyle';
import tempImg from '../../asset/temp/tempImg.jpeg';
import more from '../../asset/more.png';
import { ButtonStyle } from '../../styles/ButtonStyle';

export default function GuideDetail() {

    const location = useLocation();
    const detailTitle = location.state.guideTitle;
    const detailContent = location.state.content;

    const [isClip, setClip] = useState(false);

    //플랜 카드
    const cards = [
        { title: "장", time: "1시간 0분" },
        { title: "장소", time: "2시간 0분" },
        { title: "장소이름", time: "3시간 0분" },
        { title: "장소이름", time: "4시간 0분" },
        { title: "장소이름", time: "5시간 0분" },
    ]

    return (
        <>
            <DetailHeader title="추천 가이드" />
            <ImageWrap>
                <img src={tempGuide} className='guide-image' />
            </ImageWrap>
            <ContentDiv>
                <div className="titleWrap">{detailTitle}</div>
                <ClipDiv>
                    <ButtonStyle onClick={() => setClip(!isClip)}>
                        {isClip ? <ClipButtonG /> : <ClipButtonW />}
                    </ButtonStyle>
                </ClipDiv>
                <div className="writerWrap">{detailContent}</div>
                <EditButton>플랜 수정</EditButton>
            </ContentDiv>

            <PlanDiv>
                <p className='start_time'>일정 시작 | <TimeButton>오전 10:00</TimeButton></p>
                
                {cards.map(card => (
                    <CardDiv>
                        <img src={tempImg} className='plan-img' />
                        <div>
                            <p className='spot-name'>{card.title}</p>
                            <p className='time'>소요 시간 | <TimeButton>{card.time}</TimeButton></p>
                        </div>
                        <img src={more} className='more_button' />
                    </CardDiv>

                ))}
            </PlanDiv>

        </>
    );
}