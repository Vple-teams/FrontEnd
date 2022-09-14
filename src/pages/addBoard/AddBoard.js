import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header'
import {BoardInput, Container, GetImageBtn, HashTagContainer, ProfileWrap, WritingForm} from "./AddBoardStyle";
import Logo from '../../asset/logo.png'
import Camera from '../../asset/camera.png';
import ReviewTag from '../../components/reviewTag/ReviewTag';
import axios from 'axios';



const AddBoard = (textState) => {

    //textarea
    const [contentValue, setContentValue] = useState("");
    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    }


    //axios 데이터 보내기
    // const frm = new FormData();
    // //frm.append('hashtag', [])
    // frm.append('html', contentValue);
    // frm.append('reviewPost', false);

    const postContent = () => {
        // axios.post('https://vple-backend.all.gagark.shop/auth/post', {
        //     'html' : contentValue,
        //     'reviewPost' : false,
        // })
        // .then(response => {
        //     console.log('response : ', JSON.stringify(response, null, 2));
        // }).catch(error => {
        //     console.log('failed', error)
        // });

        axios({
            method: "POST",
            url: 'https://vple-backend.all.gagark.shop/auth/post',
            data: {
                "html" : contentValue,
                "reviewPost" : false,
            }
        }).then((res) => {
            console.log(res);
        });
    }

   
    
    //태그
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
                    <textarea 
                        className='board-input' 
                        placeholder='내용을 입력해 주세요'
                        onChange= {onContentChange}
                        value= {contentValue}
                        name= 'content' />

                    <GetImageBtn>
                        <img src={Camera} className='camera-icon'/>
                    </GetImageBtn>

                    <hr className='division-line'/>
                    <HashTagContainer>
                        <span >해시태그를 선택해주세요</span>
                        <div className='hash-tag-box'>
                            {hasTagCategory.map( (obj,index) => {
                                return(
                                    <ReviewTag
                                        obj = {obj}
                                    />
                                )
                            })}
                        </div>
                        <div className='submit-btn-box'>
                            <div className='submit-btn' onClick={postContent}>등록하기</div>
                        </div>
                    </HashTagContainer>
                </WritingForm>
            </Container>

        </>
    )
}

export default AddBoard;