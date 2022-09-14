import {
    CardButtonStyle,
    WrapImg,
    StyledContentDiv,

} from './MenuCardButtonStyle';

import tempFood from '../../asset/temp/tempFood.jpeg'

export default function MenuCardButton({menu, veganType, img}) {
    return (
        <CardButtonStyle>
            <WrapImg>
                <img src={img} className="food-image" />
            </WrapImg>
            <StyledContentDiv>
                <p className="menu">{menu}</p>
                <p className="price">{veganType}</p>
            </StyledContentDiv>
        </CardButtonStyle>
    );
}