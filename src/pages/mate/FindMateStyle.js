import styled from "styled-components";

export const SelectBar = styled.div`
  width: 70px;
  height: 7px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #859980;

  position: absolute;
  top: 100px;
    

`;

export const MainContainer = styled.div`
  padding-left: 26px;
  padding-right: 26px;
  background-color: #F8F8F8;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 390px;
`;

export const MateTitle = styled.div`
  padding-top: 20px;
  padding-bottom: 16px;
  .title{
    margin-bottom: 10px;
  }
  .guide-text{
    color: #758B6F;
  }
`;

export const ListWrap = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: solid 1px #EFEFEF;
  margin-bottom: 10px;
`;

export const ProfileImgBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: solid 1px #D9D9D9;
  
  .user-image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50px;
  }
`;

export const MateInfo =styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  
  .user-date{
    font-size: 12px;
    color: #7D7D7D;
    margin-top: 10px;
  }
`;


export const MessageContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-left: 26px;
  padding-right: 26px;
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  .message-title{
    padding-top: 4px;
  }
  .my-profile{
    width: 84px;
    height: 29px;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const MessageImgBox = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  border: solid 1px grey;
  .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const CurrentlyState = styled.div`
  margin-left: 137px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .message-count{
    margin-left: 10px;
    display: flex;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: #758B6F;
    border-radius: 50px;
    .count-num{
      line-height: 22px;
      padding-left: 1px;
      color: #ffffff;
      font-size: 12px;
    }
  }
  .post-time{
    margin-top: 6px;
    color: #999999;
    font-size: 12px;
  }
  
`;