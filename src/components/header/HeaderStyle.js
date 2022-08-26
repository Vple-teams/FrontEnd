import React from 'react';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const HeaderIcons = styled.div`
  display: flex;
  justify-content: space-between;

  .logoWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 70px;

    .logoIcon {
      width: 62px;
      height: 37px;
    }
  }

  .iconsWrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100px;

    .profileIcon {
      width: 18px;
      height: 18px;
    }

    .alertIcon {
      width: 17px;
      height: 19px;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30px;

  .navItem {
    text-align: center;
    width: 100%;
    font-weight: bold;
    font-size: 17px;
    color: #000000;
    // transform 속성 변경 될때 같이 색깔 변경
  }
`;

export const SelectBar = styled.div`
  width: 70px;
  height: 7px;
  margin-left: 15px;
  background-color: #859980;
  transform: translateX();
`;