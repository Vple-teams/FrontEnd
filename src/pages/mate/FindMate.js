import React from 'react';
import Header from "../../components/header/Header";

import {
    Container, CurrentlyState,
    ListWrap,
    MainContainer,
    MateInfo,
    MateTitle,
    MessageContainer, MessageHeader, MessageImgBox, MessageWrapper,
    ProfileImgBox
} from "./FindMateStyle";
import Image from '../../asset/logo.png'




const FindMate = () => {

    const mateList = ['메이트1', '메이트2', '메이트3'];
    const mateMessages =['메이트4','메이트4','메이트4','메이트4','메이트4','메이트4',];
    return (
        <>
            <Header/>
            <MainContainer>
                <Container>
                    <MateTitle>
                        <h3 className='title' >메이트 찾기</h3>
                        <span className='guide-text'>반경 5km 이내에 있는 메이트</span>
                    </MateTitle>
                    {mateList.map((obj, index) => {
                        return (
                            <ListWrap>
                                <ProfileImgBox>
                                    <img src={Image} className='user-image'/>
                                </ProfileImgBox>
                                <MateInfo>
                                    <span>{obj}</span>
                                    <span className='user-date'>자기소개/한줄소개</span>
                                </MateInfo>
                            </ListWrap>
                        )
                    })}
                </Container>
            </MainContainer>
            <MessageContainer>
                <MessageHeader>
                    <h3 className='message-title'>메신저</h3>
                    <div className='my-profile'>내 프로필</div>
                </MessageHeader>
                {mateMessages.map( (obj) => {
                    return(
                        <MessageWrapper>
                            <div>
                                <MessageImgBox>
                                    <img src={Image} className='user-image'/>
                                </MessageImgBox>
                            </div>
                            <MateInfo>
                                <span>메이트</span>
                                <span className='user-date'>안녕하세요! 좋은식당 공유 감사합니다.</span>
                            </MateInfo>
                            <CurrentlyState>
                                <div className='message-count'>
                                    <span className='count-num'>3</span>
                                </div>
                                <span className='post-time'>오후 2:14</span>
                            </CurrentlyState>
                        </MessageWrapper>
                    )
                })}
            </MessageContainer>

        </>
    )
}

export default FindMate;