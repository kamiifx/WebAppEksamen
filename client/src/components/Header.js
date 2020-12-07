import React from 'react';
import styled from 'styled-components';
import {LinkNavbar,LeftDivNav} from '../styled/Styled'
import {motion} from "framer-motion";

const NavBar = styled.nav`
  z-index: 1;
  position: sticky;
  height: 65px;
  width:100%;
  background-color: #fff;
  box-shadow:${({ theme }) => theme.shadows.md};
  display: flex;
  align-items: flex-start;

  h2{
    margin-top: 15px;
    justify-content: center;
    margin-left: 50px;
    font-family: 'Roboto',sans-serif;
    font-size: 28px;
    @media ${({ theme }) => theme.breakpoints.mobileS}{
      font-size:17px;
      margin-top: 23px;
      margin-left: 22px;
    }
    @media ${({ theme }) => theme.breakpoints.mobileM}{
      font-size:17px;
      margin-top: 23px;
      margin-left: 22px;
    }
    
  };
`;

const Login = styled(motion.button)`
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
      @media ${({ theme }) => theme.breakpoints.mobileS}{
      font-size:17px;
      width:80px;
    }
`;

function Header({modal,setModal}){
    return(
        <header>
            <NavBar>
                <h2>FG</h2>
                <LeftDivNav>
                    <LinkNavbar href="/">Hjem</LinkNavbar>
                    <LinkNavbar href="/">Kontorer</LinkNavbar>
                    <LinkNavbar href="/articles">Fagartikler</LinkNavbar>
                    <LinkNavbar href="/">Kontakt</LinkNavbar>
                    <Login whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }}   onClick={() => setModal(true)}>Login</Login>
                </LeftDivNav>
            </NavBar>
        </header>
    )
}

export default Header;