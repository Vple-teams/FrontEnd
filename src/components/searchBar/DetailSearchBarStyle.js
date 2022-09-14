import styled from "styled-components";
import IconSearch from '../../asset/IconSearch.png';
import { ButtonStyle} from '../../styles/ButtonStyle';

export const StyledGreyDiv = styled.div`
    width: 500px;
    height: 74px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledSearchBar = styled.div`
    width: 426.44px;
    height: 33.09px;
    background-color: #FFFFFF;
    background-size: 426.44px, 33.09px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled.input`
    type: text;
    width: 380px;
    border: none;
    font-size: 12px;

    ::placeholder {
        color: #A5A5A5;
    }
`;
export const StyledSearchButton = styled(ButtonStyle)`
    width: 14.64px;
    height: 14.61px;
    background-image: url(${IconSearch});
    background-size: 14.64px, 14.61px;
    margin-left: 10px;
`;

export const SelectLocationOption = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0px 18px;
  
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