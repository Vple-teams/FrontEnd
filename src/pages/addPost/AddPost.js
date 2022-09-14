import React from 'react';
import { useState } from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {AddMainPostWrap, ApplyBtn, CameraIconWrap, Container, TextContainer, TextWrap} from "./AddPostStyle";
import CameraIcon from '../../asset/camera.png';
import axios from 'axios';


const AddPost = () => {

    //textarea
    const [contentValue, setContentValue] = useState("");
    const onContentChange = (event) => {
        setContentValue(event.currentTarget.value);
    }

    const postContent = () => {
        axios({
            method: "POST",
            url: 'https://vple-backend.all.gagark.shop/auth/plogging',
            data: {
                "html" : contentValue,
            }
        }).then((res) => {
            console.log(res);
        });
    }

    return(
        <>
            <DetailHeader/>
            <Container>
                <AddMainPostWrap>
                    <CameraIconWrap>
                        <img src={CameraIcon} className='camera-icon'/>
                    </CameraIconWrap>
                    <p className='text'>대표 사진 등록하기</p>
                </AddMainPostWrap>
                <TextContainer>
                    <TextWrap>
                        <textarea 
                            className='text-area'
                            placeholder='내용을 입력해 주세요'
                            onChange= {onContentChange}
                            value= {contentValue}
                            name= 'content' />
                        <ApplyBtn onClick={postContent}>등록하기</ApplyBtn>
                    </TextWrap>
                </TextContainer>
            </Container>
        </>
    )
}

export default AddPost;