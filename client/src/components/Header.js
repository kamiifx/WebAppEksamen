import React from 'react';
import styled from 'styled-components';
import {LinkNavbar,LeftDivNav} from '../styled/Styled'

const NavBar = styled.nav`
  position: sticky;
  height: 65px;
  width:100%;
  background-color: ${({ theme }) => theme.colors.default};
  box-shadow:${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: flex-start;
  h2{
    margin-top: 15px;
    justify-content: center;
    margin-left: 50px;
    font-family: 'Roboto',sans-serif;
    font-size: 28px;
  };
`;

const Login = styled.button`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'Roboto',sans-serif;
  font-size: 20px;
  height: 65px;
  width: 100px;
  border: none;
  left: 0;
  background-color: ${({theme}) => theme.colors.accept};
  &:hover{
    transition: 0.5s ease-in-out;
    background-color:${({theme}) => theme.colors.acceptHover} ;
  }
`;

function Header(){
    return(
        <header>
            <NavBar>
                <h2>FG</h2>
                <LeftDivNav>
                    <LinkNavbar href="/">Hjem</LinkNavbar>
                    <LinkNavbar href="/">Kontorer</LinkNavbar>
                    <LinkNavbar href="/">Fagartikler</LinkNavbar>
                    <LinkNavbar href="/">Kontakt</LinkNavbar>
                    <Login>Login</Login>
                </LeftDivNav>
            </NavBar>
        </header>
    )
}

export default Header;