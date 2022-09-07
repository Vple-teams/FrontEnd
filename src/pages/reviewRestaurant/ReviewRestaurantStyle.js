import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  padding-left: 29px;
  padding-right: 29px;
  padding-top: 15px;
  background-color: #ffffff;

  .submit-btn-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 40px;
    
    .submit-btn{
      text-align: center;
      line-height: 55px;
      background-color: #758B6F;
      color: #ffffff;
      width: 100%;
      height: 43%;
      border-radius: 10px;
      
    }
  }
  
`;

export const WritingForm = styled.div`
  width: 100%;
  height: 100vh;
  
  .board-input{
    //border: solid 1px red;
    padding-top: 20px;
    width: 99%;
    height: 40%;
    outline: none;
    border: none;
    writing-mode: horizontal-tb;
    resize: none;
  }
  
`;

export const ProfileWrap =styled.div`
  display: flex;
  width: 100%;
  
  .profile-icon-container{
    .profile-image-wrap{
      width: 56px;
      height: 56px;
      border: solid 1px #D9D9D9;
      border-radius: 100px;
      .user-icon{
        width: 100%;
        height: 100%;
        border-radius: 100px;
        object-fit: contain;
        //background-color: green;
      }
    }
  }

  .user-name-wrap {
    width: 100%;
    padding-top: 10px;
    padding-left: 10px;
  }
`;

export const GetImageBtn = styled.div`
  width: 73px;
  height: 73px;
  margin-top: 8px;
  border-radius: 10px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
  rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  margin-bottom: 20px;
  .camera-icon{
    margin-top: 18px;
    margin-left: 21px;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;

export const WrapReviewBar= styled.div`
  margin-top: 25px;

  .bar_inactive{
    border: solid 1px #758B6F;
    background-color: white;
  }

  .bar_active{
    background-color: #E2E2E2;
  }
`;
export const ReviewBar = styled.div`

    width: 438.28px;
    height: 42.31px;
    border-radius: 8px;
    box-shadow: 0px 0px 2px #CDCDCD;

    display: inline-block;
    margin-bottom: 10px;

    .review{
        font-size: 14px;
        text-align: left;
        margin-top: 12px;
        margin-left: 20px;
    }

    
`;