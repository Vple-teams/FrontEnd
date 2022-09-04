import React from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {ImageContainer, NavBarContainer} from "./PloggingDetailStyle";
import PlogImage from '../../asset/plog_image.jpg';
import NavBarDetail from "../../components/navDetail/NavBarDetail";
import JoinList from "../../components/joinList/JoinList";
import Comment from "../../components/comment/Comment";
import {useNavigate} from "react-router-dom";

const PloggingDetail = () => {

    const navBarMenu = ['상세 내용', '참여자', '댓글'];
    //메뉴 리스트
    const navBarContent = [
        {
            title: "상세 내용",
            content:
            <NavBarDetail />
        },
        {
            title: "참여자",
            content:
            <JoinList/>
        },
        {
            title: "댓글",
            content:
            <Comment/>
        },
    ]

    return (
        <>
            <DetailHeader title="플로깅 모집 제목"/>
            <ImageContainer>
                <img src={PlogImage} className='plog-image'/>
            </ImageContainer>
            <NavBarContainer>
                {navBarMenu.map( (obj,index) => {
                    return(
                        <div className='nav-items'>{obj}</div>
                    )
                })}
            </NavBarContainer>
        </>
    )
}

export default PloggingDetail;