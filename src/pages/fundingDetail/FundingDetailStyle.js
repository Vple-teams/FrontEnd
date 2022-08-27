import styled from "styled-components";
import { ButtonStyle } from "../../styles/ButtonStyle";

export const StyledImg = styled.div`
    width: 500px;
    height: 329px;
    background-color: #D9D9D9;
    background-size: 500px, 329px;
`;

export const StyledContent = styled.div`
    padding: 20px;
    background-color: white;
`;
export const StyledDiv = styled.div`
    margin-bottom: 30px;
    text-align: left;
`;
export const AlignRight = styled.div`
    float: right;
    display: inline;
`;

export const StyledContentTitle = styled.div`
    font-size: 18px;
    text-align: left;
    font-weight: bold;
`;
export const StyledContentDescription = styled.div`
    font-size: 12px;
    color: #A3A3A3;
    text-align: left;
    margin-top: 5px;
`;

export const BigFont = styled.p`
    font-size: 16px;
    font-weight: 500;
    display: inline;
`;
export const SmallFont = styled.p`
    font-size: 14px;
    display: inline;
    font-weight: 400;
`;
export const GreenFont = styled(BigFont)`
    color: #758B6F;
`;

export const RateBar = styled.div`
    background-color: #D9D9D9;
    width: 458.73px;
    height: 5.13px;
    border-radius: 32px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const AchievBar = styled(RateBar)`
    background-color: #758B6F;
    width: ${props => `${props.count > 100 ? 100 : props.count}%`};
`;

export const WhiteButton = styled(ButtonStyle)`
    width: 142.91px;
    height: 37px;
    font-size: 14px;
    display: inline-block;
    border: 1px solid #DEDEDE;
    text-algin: center;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #000000;
`;
export const WhiteButtonPadding = styled(WhiteButton)`
    margin: 0px 15px;
`;
export const GreenButton = styled(ButtonStyle)`
    margin-top: 15px;
    background-color: #758B6F;
    width: 458.73px;
    height: 61.71px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    border-radius: 11px;
`;