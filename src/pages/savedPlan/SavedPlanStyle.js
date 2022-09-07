import styled from "styled-components";
import { ButtonStyle } from '../../styles/ButtonStyle';

import TimePicker from '../../components/timePicker/TimePicker';

export const ContentWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
`;
export const ImageWrap = styled.div`
    .guide-image{
        width: 500px;
        height: 202px;
        object-fit: cover;
    }
`;


export const WrapTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .prev_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
    .day{
      color: #758B6F;
      font-weight: 700;

      display: inline-block;
      margin: 0px 18px;
    }
    .next_button{
      width: 25px;
      height: 25px;

      display: inline-block;
    }
`;
export const SaveButton = styled(ButtonStyle)`
    width: 68px;
    height: 27px;
    border-radius: 6px;
    background-color: #758B6F;


    color: white;
    font-size: 14px;

    float: right;
    margin-left: 15px;
    margin-bottom: 10px;
`;


export const EditButton = styled(ButtonStyle)`
    width: 420px;
    height: 46px;
    display: inline-block;
    border-radius: 5px;
    border: solid 1px #DEDEDE;
    font-size: 14px;
    color: #727272;
`;

export const PlanDiv = styled.div`
    padding: 20px 40px 40px 40px;
    background-color: white;


    display: inline-block;
    
    .start_time{
      color: #848484;
      font-size: 14px;

      display: inline-block;
    }

    .icon_lock{
      width: 15.86px;
      height: 21.82px;

      float: right;

      display: inline-block;
    }
`;

export const TimeButton = styled(ButtonStyle)`
    color: #758B6F;
    font-size: 14px;
    border-bottom: solid 1px #758B6F;
    margin-left: 4px;
    line-height: 14px;
`;

