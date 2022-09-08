import DetailHeader from '../../components/detailHeader/DetailHeader'
import tempGuide from '../../asset/temp/tempGuide.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import TimePicker from '../../components/timePicker/TimePicker';
import PlanCard from '../../components/planCard/PlanCard';

import {
    ContentWrap,
    ImageWrap,
    WrapTitle,
    PlanDiv,
    TimeButton,
    SaveButton,
    EditButton,

} from './SavedPlanStyle';
import tempImg from '../../asset/temp/tempImg.jpeg';
import more from '../../asset/more.png';
import prevBtn from '../../asset/prevBtn.png';
import nextBtn from '../../asset/nextBtn.png';
import iconLineLock from '../../asset/IconLineLock.png';

export default function SavedPlan() {

    //페이지 이동
    const navigate = useNavigate();
    const routerEditPlan = () => {
        navigate('/plan/map');
        window.scrollTo(0,0)
    }

    const [isClip, setClip] = useState(false);

    //플랜
    const [cards, setCards] = useState([
        { id: 1, title: "장", time: "1시간 0분" },
        { id: 2, title: "장소", time: "2시간 0분" },
        { id: 3, title: "장소이름", time: "3시간 0분" },
        { id: 4, title: "장소이름", time: "4시간 0분" },
        { id: 5, title: "장소이름", time: "5시간 0분" },
    ])

    //timepicker
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }

    //deleteButton
    const onRemove = id => {
        setCards(cards.filter(card => card.id !== id));
    }
    const removeAll = () => {
        const empty = [];
        setCards(empty);
    }

    return (
        <>
            <DetailHeader title="뚜벅이 경주 맛집" />

            <ContentWrap>

                <ImageWrap>
                    <img src={tempImg} className='guide-image' />
                </ImageWrap>

                <PlanDiv>
                    <WrapTitle>
                        <img src={prevBtn} className='prev_button' />
                        <p className='day'>DAY 1</p>
                        <img src={nextBtn} className='next_button' />
                    </WrapTitle>
                    <p className='start_time'>일정 시작 |
                        <TimeButton onClick={openModal}>오전 10:00</TimeButton></p>
                    {isModalOpen === true ?
                        <TimePicker
                            open={isModalOpen}
                            close={closeModal}
                        /> : null}

                    <SaveButton>저장</SaveButton>
                    <img src={iconLineLock} className='icon_lock' />

                    <EditButton onClick={routerEditPlan} >플랜 수정</EditButton>

                    {cards.map(card => (
                        <PlanCard
                            card={card}
                            onRemove={onRemove}
                        />
                    ))}

                </PlanDiv>

            </ContentWrap>


        </>
    );
}