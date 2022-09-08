import styled from "styled-components";
import IconClipW from '../../asset/IconClipW.png';
import IconClipG from '../../asset/IconClipG.png';
import { ButtonStyle } from '../../styles/ButtonStyle';

export const ImageWrap = styled.div`
    .guide-image{
        width: 500px;
        height: 202px;
        object-fit: cover;
    }
`;

export const ContentDiv = styled.div`
    padding: 30px 40px;
    background-color: white;

    .titleWrap{
        font-size: 18px;
        color: black;
        text-align: left;
        display: inline;
    }

    .writerWrap{
        font-size: 15px;
        color: #ABABAB;
        text-align: left;
        padding-top: 5px;
    }

`;

export const ClipDiv = styled.div`
    display: inline;
    float: right;
`;
export const ClipButtonW = styled(ButtonStyle)`
    background-image: url(${IconClipW});
    background-size: 16.67px 19.23px;
    width: 16.67px;
    height: 19.23px;
    display: inline;
`;
export const ClipButtonG = styled(ButtonStyle)`
    background-image: url(${IconClipG});
    background-size: 16.67px 19.23px;
    width: 16.67px;
    height: 19.23px;
    display: inline;
`;


export const EditButton = styled(ButtonStyle)`
    width: 420px;
    height: 46px;
    display: inline-block;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px #DEDEDE;
    font-size: 14px;
`;

export const PlanDiv = styled.div`
    padding: 0px 40px 40px 40px;
    background-color: white;

    .start_time{
        color: #848484;
        font-size: 14px;
    }
`;
export const TimeButton = styled(ButtonStyle)`
    color: #758B6F;
    font-size: 14px;
    border-bottom: solid 1px #758B6F;
    margin-left: 4px;
    line-height: 14px;
`;
export const CardDiv = styled.div`
    width: 420.51px;
    height: 92.31px;
    background-size: 420.51px, 92.31px;
    box-shadow: 0px 0px 5px #C5C5C5;

    border-radius: 10px;
    margin-top: 15px;

    display: flex;
    align-items: center;

    .plan-img{
        width: 62.82px;
        height: 62.82px;
        border-radius: 8px;
        object-fit: cover;

        display: inline-block;
        margin-left: 16.67px;
    }

    .spot-name{
        font-size: 14px;
        display: block;
        margin-left: 15px;
    }
    
    .time{
        color: #848484;
        font-size: 14px;
        display: inline-block;
        margin-left: 15px;
        margin-top: 20px;
    }

    .more_button{
        width: 3.85px;
        height: 15.38px;
        display: inline-block;
        margin-left: auto;
        margin-bottom: auto;
        margin-right: 16.67px;
        margin-top: 20px;
    }
    
`;