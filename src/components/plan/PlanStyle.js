import styled from "styled-components";

export const SelectBar = styled.div`
  width: 70px;
  height: 7px;
  margin-left: 115px;
  background-color: #859980;

  position: absolute;
  top: 100px;
`;

export const PlanContainer = styled.div`
  background-color: #ffffff;
  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 30px;
  
  .basic-setting{
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-left: 4px;
    padding-top: 30px;
    margin-bottom: 30px;
  };
`;

export const SetLocationWrap = styled.div`
  width: 100%;
  height: 119px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
  .trip-location{
    color: #000000;
    font-size: 16px;
    margin-top: 20px;
    margin-left: 17px;
    margin-bottom: 10px;
  };
`;


export const SelectLocationOption = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  
  .select-box{
    color: #A5A5A5;
    font-size: 13px;
    padding-left: 15px;
    margin-top: 6px;
    width: 44%;
    height: 36px;
    border-radius: 10px;
    outline: none;
    border: solid 0.5px #858585;
    appearance:none;

    .option{
      color: #858585;
    }
  };
`;

export const CalendarWrap = styled.div`
  width: 100%;
  height: 374px;
  border-radius: 10px;
  margin-top: 19px;
  margin-bottom: 19px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CountWrap = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;

  margin-bottom: 20px;

  justify-content: space-around;
  .people{
  };

`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin-left: 200px;

  .set-btn{
    font-size: 25px;
    line-height: 27px;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    border: solid 0.5px black;
  };

  .count{};
  //.plus-btn{
  //  width: 24px;
  //  height: 24px;
  //  border-radius: 50px;
  //  border: solid 0.5px black;
  //};
`;

export const SubmitButton = styled.div`
  width: 100%;
  height: 61px;
  border-radius: 10px;
  //background-color: #D9D9D9;
  background-color: #758B6F;
  color: white;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;