import React from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {ImageContainer, NavBarContainer} from "../ploggingDetail/PloggingDetailStyle";
import PlogImage from "../../asset/plog_image.jpg";
import {DetailInfoTextWrap, DetailPlogInfo, PostSubmitBtn} from "../../components/navDetail/NavBarDetailStyle";
import {ListWrap, MateInfo, ProfileImgBox} from "../mate/FindMateStyle";
import Image from "../../asset/logo.png";
import {UserInfoWrap} from "./PlogCheckDetailStyle";
import PlogCheckPost from "../../components/plogCheckPost/PlogCheckPost";
import Comment from "../../components/comment/Comment";


const PlogCheckDetail = () => {

    const checkNavBarMenu = ['글내용','댓글'];

    return(
        <>
            <DetailHeader/>
            <ImageContainer>
                <img src={PlogImage} className='plog-image'/>
            </ImageContainer>
            <NavBarContainer>
                {checkNavBarMenu.map( (obj,index) => {
                    return(
                        <div className='nav-items'>{obj}</div>
                    )
                })}
            </NavBarContainer>
            {/*<PlogCheckPost/>*/}
            <Comment/>

        </>
    )
}

export default PlogCheckDetail;