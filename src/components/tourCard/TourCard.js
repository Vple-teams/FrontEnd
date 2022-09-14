import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { ButtonStyle } from '../../styles/ButtonStyle';
import {CardButtonStyle, StyledImgDiv, ClipButtonG, ClipButtonW,
    StyledContentDiv, StyledTitleFont} from './TourCardStyle';

export default function TourCard({name}) {

    //화면 이동
    let navigate = useNavigate();
    const routerDetail = () => {
        navigate('/tour/detail')
        window.scrollTo(0,0)
    }

    const [isClip, setClip] = useState(false);

    return (
        <CardButtonStyle>

            <ButtonStyle onClick={() => setClip(!isClip)}>
                    { isClip ? <ClipButtonG/> : <ClipButtonW/> }
            
            <div onClick={routerDetail}>
            
            <StyledImgDiv/>
            <StyledContentDiv>
                <StyledTitleFont>{name}</StyledTitleFont>
            </StyledContentDiv>
            </div>

            </ButtonStyle>
        </CardButtonStyle>

    );
}