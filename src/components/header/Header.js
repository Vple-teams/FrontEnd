import React from 'react';
import style from './Header.module.scss'
import Logo from '../../icon/logo.png';
import Profile from '../../icon/Profile.png';
import Alert from '../../icon/Alert.png';


const Header = () => {
    return (
        <>
            <header className={style.container}>
                <div className={style.headerImages}>
                    <div>
                        <img src={Logo}/>
                    </div>
                    <div>
                        <img src={Profile} className={style.userIcon}/>
                        <img src={Alert} className={style.userIcon}/>
                    </div>
                </div>
                <nav className={style.navContainer}>
                    <ul className={style.navList}>
                        <li>홈</li>
                        <li>플랜</li>
                        <li>펀딩</li>
                        <li>플로깅</li>
                        <li>커뮤니티</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header