import React, {useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {headerListState, headerTabIndex} from "../../recoil/state";
import { useNavigate } from "react-router-dom";

import { Container, HeaderIcons, NavContainer, SelectBar} from "./HeaderStyle";
import Logo from '../../asset/logo.png';
import Profile from '../../asset/Profile.png';
import Alert from '../../asset/Alert.png';



const Header = () => {

    const headerTabList = useRecoilValue(headerListState); // 해더에 보여줄 배열 string 값
    // const [tabIndex, setTabIndex] = useRecoilState(headerTabIndex);

    let navigate = useNavigate();
    const onClickBackHome = () => {
        navigate('/')
        window.scrollTo(0,0)
    };
    const onClickProfile = () => {
        navigate('/myProfile')
        window.scrollTo(0,0)
    };
    const onClickRouting = (index) => {
        if(index === 0 ){
            navigate('/')
        } else if (index === 1){
            navigate('/plan')
        } else if (index === 2) {
            navigate('/funding')
        } else if ( index === 3) {
            navigate('/plogging')
        } else if ( index === 4) {
            navigate('/community')
        } else {
            return alert('error');
        }
    }

    return (
        <>
            <Container>
                <HeaderIcons className='headerIcons'>
                    <h1 className='logoWrap' onClick={onClickBackHome}>
                        <img src={Logo} className='logoIcon'/>
                    </h1>
                    <div className='iconsWrap'>
                        <img src={Profile} className='profileIcon' onClick={onClickProfile}/>
                        <img src={Alert} className='alertIcon'/>
                    </div>
                </HeaderIcons>
                <NavContainer >
                    {headerTabList.map((list, index) => {
                        return (
                            <div className='navItem' onClick={() => onClickRouting(index)}>{list}</div>
                        )
                    })}
                </NavContainer>
                <SelectBar/>
            </Container>
        </>
    )
}

export default Header