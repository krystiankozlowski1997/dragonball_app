import React from 'react';
import styled from "styled-components";
import Button_Icon from "../atoms/Button_Icon/Button_Icon";
import freezaIcon from '../../assets/icons/freeza.png';
import memechanIcon from '../../assets/icons/memechan.png';
import sayanIcon from '../../assets/icons/sayan.png';
import { NavLink } from "react-router-dom";
import logoIcon from '../../assets/icons/dragonball.png';
import logoutIcon from '../../assets/icons/logout.svg';

const Styled_Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.sayans)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Styled_Logo_Link = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 110%;
  border: none;
  margin-bottom: 10vh;
`;

const Styled_Link_List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Styled_Logout_Button = styled(Button_Icon)`
  margin-top: auto;
  background-size: 60%;
`;

const Sidebar = ({pageType}) => (
    <Styled_Wrapper activeColor={pageType}>
        <Styled_Logo_Link to="/" />
        <Styled_Link_List>
            <li>
                <Button_Icon exact as={NavLink} to="/" activeClass="active" icon={sayanIcon}/>
            </li>
            <li>
                <Button_Icon as={NavLink} to="/namechans" activeClass="active" icon={memechanIcon}/>
            </li>
            <li>
                <Button_Icon as={NavLink} to="/freeza" activeClass="active" icon={freezaIcon}/>
            </li>
        </Styled_Link_List>
        <Styled_Logout_Button as={NavLink} to="/login" activeClass="active" icon={logoutIcon} />
    </Styled_Wrapper>
);

export default Sidebar;
