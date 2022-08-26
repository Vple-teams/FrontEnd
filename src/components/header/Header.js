import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, HeaderIcons, NavContainer, SelectBar} from "./HeaderStyle";
import Logo from '../../asset/logo.png';
import Profile from '../../asset/Profile.png';
import Alert from '../../asset/Alert.png';


const Header = () => {

    let navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/funding');
    }
    const navigationList = ['홈', '플랜', '펀딩', '플로깅', '커뮤니티'];

    return (
        <>
            <Container>
                <HeaderIcons className='headerIcons'>
                    <h1 className='logoWrap'>
                        <img src={Logo} className='logoIcon'/>
                    </h1>
                    <div className='iconsWrap'>
                        <img src={Profile} className='profileIcon'/>
                        <img src={Alert} className='alertIcon'/>
                    </div>
                </HeaderIcons>
                <NavContainer>
                    {navigationList.map((list) => {
                        return (
                            <div className='navItem' onClick={onClickHandler}>{list}</div>
                        )
                    })}
                </NavContainer>
                <SelectBar/>

            </Container>
        </>
    )
}

export default Header