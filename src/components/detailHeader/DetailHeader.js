import React from 'react'
import {useNavigate} from "react-router-dom";
import Profile from "../../asset/Profile.png";
import Alert from "../../asset/Alert.png";
import Logo from "../../asset/logo.png";
import BackArrow from '../../asset/back_arrow.png';
import {
    HeaderContainer,
    HeaderIconsWrap,
    HeaderTitleContainer,
    IconContainer,
    IconsWrap,
    LogoWrap, TitleContainer
} from "./DetailHeaderStyle";


const DetailHeader = () => {
    let navigate = useNavigate();
    const onClickRouteBack = () => {
        navigate(-1)
    }
    return (
        <>
            <HeaderContainer>
                <HeaderIconsWrap>
                    <LogoWrap>
                        <img src={Logo} className='logo-image'/>
                    </LogoWrap>
                    <IconsWrap className='iconsWrap'>
                        <img src={Profile} className='profileIcon'/>
                        <img src={Alert} className='alertIcon'/>
                    </IconsWrap>
                </HeaderIconsWrap>
                <HeaderTitleContainer>
                    <IconContainer onClick={onClickRouteBack}>
                        <img src={BackArrow} className='back-arrow'/>
                    </IconContainer>
                    <TitleContainer>
                        <h3>플로깅 모집 제목</h3>
                    </TitleContainer>
                </HeaderTitleContainer>
            </HeaderContainer>
        </>
    )
}

export default DetailHeader;