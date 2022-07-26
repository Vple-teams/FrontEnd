import React from 'react';
import style from './Header.module.scss'
import Logo from '../../icon/logo.png';
import Profile from '../../icon/Profile.png';
import Alert from '../../icon/Alert.png';


const Header = () => {

    const navigationList = ['홈','플랜','펀딩','플로깅','커뮤니티'];

    return (
        <>
            <header className={style.container}>
                <div className={style.headerIcons}>
                    <h1 className={style.logoWrap}>
                        <img src={Logo} className={style.logoIcon}/>
                    </h1>
                    <div className={style.iconsWrap}>
                        <img src={Profile} className={style.profileIcon}/>
                        <img src={Alert} className={style.alertIcon}/>
                    </div>
                </div>
                <nav className={style.navContainer}>
                    <ul className={style.navList}>
                        {navigationList.map( (list) => {
                            return(
                                <li className={style.navItem}>{list}</li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header