import React from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {AddMainPostWrap, ApplyBtn, CameraIconWrap, Container, TextContainer, TextWrap} from "./AddPostStyle";
import CameraIcon from '../../asset/camera.png';



const AddPost = () => {

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
                        <textarea className='text-area' placeholder='내용을 입력해 주세요'/>
                        <ApplyBtn>등록하기</ApplyBtn>
                    </TextWrap>
                </TextContainer>
            </Container>
        </>
    )
}

export default AddPost;