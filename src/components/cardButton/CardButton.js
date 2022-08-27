import React, {useState} from "react";
import { ButtonStyle } from '../../styles/ButtonStyle';
import {CardButtonStyle, StyledImgDiv, ClipButtonG, ClipButtonW,
     StyledContentDiv, StyledTitleFont, StyledContentFont} from './CardButtonStyle'

export default function CardButton({ guideTitle, content }) {

    const [isClip, setClip] = useState(false);

    return (
        <CardButtonStyle>
            <StyledImgDiv>
                <ButtonStyle onClick={() => setClip(!isClip)}>
                    { isClip ? <ClipButtonG/> : <ClipButtonW/> }
                </ButtonStyle>
            </StyledImgDiv>
            <StyledContentDiv>
                <StyledTitleFont>{guideTitle}</StyledTitleFont>
                <StyledContentFont>{content}</StyledContentFont>
            </StyledContentDiv>
        </CardButtonStyle>

    );
}