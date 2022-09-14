import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { ButtonStyle } from '../../styles/ButtonStyle';
import {CardButtonStyle, StyledImgDiv, ClipButtonG, ClipButtonW,
    StyledContentDiv, StyledTitleFont} from './RestaurantCardStyle';
import logo from '../../asset/logo.png';

export default function RestaurantCard({id, name, img}) {

    //화면 이동
    let navigate = useNavigate();
    const routerDetail = () => {

        navigate('/restaurant/detail', {
            state: {
                id: id,
                name: name,
                img: img,
            }
        });

        window.scrollTo(0,0)
    }

    const [isClip, setClip] = useState(false);

    return (
        <CardButtonStyle>

            <ButtonStyle onClick={() => setClip(!isClip)}>
                    { isClip ? <ClipButtonG/> : <ClipButtonW/> }
            
            <div onClick={routerDetail}>
            
            <StyledImgDiv src={img === null ? logo : img} className='restaurant-img'/>

            <StyledContentDiv>
                <StyledTitleFont>{name}</StyledTitleFont>
            </StyledContentDiv>
            </div>

            </ButtonStyle>
        </CardButtonStyle>

    );
}