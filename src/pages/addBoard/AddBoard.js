import React from 'react';
import Header from '../../components/header/Header'
import {BoardInput, Container, GetImageBtn, HashTagContainer, ProfileWrap, WritingForm} from "./AddBoardStyle";
import Logo from '../../asset/logo.png'
import Camera from '../../asset/camera.png';


const AddBoard = () => {

    const hasTagCategory = ['# 여행','# 식당','# 관광지','# 플로깅','# 펀딩'];

    return(
        <>
            <Header/>
            <Container>
                <WritingForm>
                    <ProfileWrap>
                        <div className='profile-icon-container'>
                            <div className='profile-image-wrap'>
                                <img src={Logo} className='user-icon' />
                            </div>
                        </div>
                        <div className='user-name-wrap'>
                            <h4>닉네임</h4>
                        </div>
                    </ProfileWrap>
                    <textarea className='board-input' placeholder='내용을 입력해 주세요'/>
                    <GetImageBtn>
                        <img src={Camera} className='camera-icon'/>
                    </GetImageBtn>

                    <hr className='division-line'/>
                    <HashTagContainer>
                        <span >해시태그를 선택해주세요</span>
                        <div className='hash-tag-box'>
                            {hasTagCategory.map( (obj,index) => {
                                return(
                                    <div className='hash-tag'>{obj}</div>
                                )
                            })}
                        </div>
                        <div className='submit-btn-box'>
                            <div className='submit-btn'>등록하기</div>
                        </div>
                    </HashTagContainer>
                </WritingForm>
            </Container>

        </>
    )
}

export default AddBoard;