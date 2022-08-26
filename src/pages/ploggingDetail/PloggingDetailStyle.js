import styled from "styled-components";


export const ImageContainer = styled.div`
  width: 100%;
  height: 483px;
  
  .plog-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  };
`;

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #ffffff;
  border-bottom: solid 1px #F8F8F8;
  //box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  
  .nav-items{
    width: 100%;
    line-height: 50px;
    color: #818181;
  };
`;