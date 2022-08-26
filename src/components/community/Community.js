import React from 'react';
import Header from '../header/Header';
import {
    Container,
    InputWrap,
    SearchContainer,
    TextForm,
    TitleForm
} from "./CommunityStyle";

import TextBlock from "../textBlock/TextBlock";
import ViewAll from '../../asset/view_all.png';
import {useNavigate} from "react-router-dom";



const Community = () => {

    const navigate = useNavigate()
    const hashTag = ['# 여행','# 식당','# 관광지','# 플로깅','# 펀딩'];
    const boardItems = ['홍길동', '짱구', '철수', '흰둥이'];

    return(
        <>
            <Header/>
            <Container>
                <SearchContainer>
                    <InputWrap>
                        <input className='search-community' placeholder='게시판의 글을 검색해 보세요'/>
                    </InputWrap>
                    <TitleForm>
                        <div className='title-header'>
                            <h4 className='all-text'>전체글</h4>
                            <img className='view-all-btn' src={ViewAll}/>
                        </div>

                        <div className='create-text'>작성하기</div>
                    </TitleForm>
                    <TextForm>
                        {hashTag.map( (obj) => {
                            return(
                                <div className='hash-tag-btn'>{obj}</div>
                            )
                        }) }
                    </TextForm>
                </SearchContainer>
            </Container>
            <TextBlock/>
        </>
    )
}

export default Community;