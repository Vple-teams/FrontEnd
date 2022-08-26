import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AddMainPostWrap = styled.div`
  width: 100%;
  height: 383px;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .text{
    margin-top: 10px;
    color: #A3A3A3;
    font-size: 16px;
  };
`;

export const CameraIconWrap = styled.div`
  width: 30px;
  height: 30px;
  
  .camera-icon{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  background-color: #ffffff;
  height: 500px;
`;

export const TextWrap = styled.div`
  width: 100%;
  height: 60%;
  
  .text-area{
    padding-top: 40px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  };
`;

export const ApplyBtn = styled.div`
  background-color: #758B6F;
  width: 100%;
  height: 61px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  line-height: 62px;
  margin-top: 20px;
`;
