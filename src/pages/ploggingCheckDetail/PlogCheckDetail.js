import React, {useState} from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {ImageContainer, NavBarContainer} from "../ploggingDetail/PloggingDetailStyle";
import PlogImage from "../../asset/plog_image.jpg";
import {DetailInfoTextWrap, DetailPlogInfo, PostSubmitBtn} from "../../components/navDetail/NavBarDetailStyle";
import {ListWrap, MateInfo, ProfileImgBox} from "../mate/FindMateStyle";
import Image from "../../asset/logo.png";
import {UserInfoWrap} from "./PlogCheckDetailStyle";
import PlogCheckPost from "../../components/plogCheckPost/PlogCheckPost";
import Comment from "../../components/comment/Comment";
import PlogNavTab from "../../components/plogNavTab/PlogNavTab";


const PlogCheckDetail = () => {

    const checkNavBarMenu = ['글내용','댓글'];
    const [navState, setNavState] = useState(0);

    const onChangeNavState = (index) => {
        setNavState(index)
    }

    return(
        <>
            <DetailHeader/>
            <ImageContainer>
                <img src={PlogImage} className='plog-image'/>
            </ImageContainer>
            <NavBarContainer>
                {checkNavBarMenu.map( (obj,index) => {
                    return(
                        <div className='nav-items' onClick={() => onChangeNavState(index)}>{obj}</div>
                    )
                })}
            </NavBarContainer>
            <PlogNavTab navState={navState}/>
            {/*<PlogCheckPost/>*/}
            {/*/!*<Comment/>*!/*/}

        </>
    )
}

export default PlogCheckDetail;