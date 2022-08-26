import React from 'react';
import DetailHeader from "../../components/detailHeader/DetailHeader";
import {ImageContainer, NavBarContainer} from "./PloggingDetailStyle";
import PlogImage from '../../asset/plog_image.jpg';
import NavBarDetail from "../../components/navDetail/NavBarDetail";
import JoinList from "../../components/joinList/JoinList";
import Comment from "../../components/comment/Comment";

const PloggingDetail = () => {

    const navBarMenu = ['상세 내용', '참여자', '댓글'];

    return (
        <>
            <DetailHeader/>
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
            {/*<NavBarDetail />*/}
            {/*<JoinList/>*/}
            <Comment/>
        </>
    )
}

export default PloggingDetail;