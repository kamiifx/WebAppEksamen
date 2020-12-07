import styled from 'styled-components';
import {motion} from "framer-motion";


export const BoxButton = styled(motion.button)`
  background-color:${({ theme }) => theme.colors.header};
  border: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  color: white;
  width: 10rem;
  height: 5rem;
  border-radius: 2px;
  &.blue{
      background-color:${({ theme }) => theme.colors.accept};
  &:hover{
    background-color:${({ theme }) => theme.colors.acceptHover};
    transition: 0.5s ease-in-out;
  }
  }
  &.green{
  background-color:${({ theme }) => theme.colors.greenAccept};
  &:hover{
    background-color:${({ theme }) => theme.colors.greenHover};
    transition: 0.5s ease-in-out;
  }
  }
  &:hover{
  cursor: pointer;
  }
`;

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.default};
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  &.left{
    margin-left: 20%;
    gap: 10px;
    }
`;

export const LinkNavbar = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'Roboto',sans-serif;
  font-size: 20px;
  @media ${({ theme }) => theme.breakpoints.mobileS}{
      font-size:15px;
      margin-top: 20px;
      margin-left: 10px;
    };
  @media ${({ theme }) => theme.breakpoints.mobileM}{
      font-size:16px;
    };
    
`;

export const LeftDivNav = styled.div`
  position: sticky;
  left: 100%;
`;

export const Header = styled.header`
  display: flex;
  position: sticky;
  height: 26rem;
  background-color:${({ theme }) => theme.colors.header};
  justify-content: center;
  margin-bottom: 5rem;
  h2{
    font-size: 40px;
    margin-top: 7%;
    font-family: 'Roboto',sans-serif;
  }
`;

//articles
export const ArticleBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  font-family: 'Roboto',sans-serif;
  text-transform: capitalize;

  a{
    background-color: ${({ theme }) => theme.colors.header};
    width: 13rem;
    height: 10rem;
    margin-right: 1rem;
  }
  h4{
    font-weight: 500;
    margin-left: 10px;
  }

`;
export const ArticleIntro = styled.div`
  flex-direction: column;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 13%;
  max-width: 94%;
`;

export const FlexItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  background-color:${({ theme }) => theme.colors.header};
  margin-left: 40px;
  margin-bottom: 10px;
  &.med{
  width: 84.7rem;
  }
  &.big{
  margin-top: 35px;
  width: 117rem;
  height: 35rem;
  margin-bottom: 6rem;
  }
  a{
    text-decoration: none;
    color: black;
    font-family: 'Roboto',sans-serif;
    font-size: 60px;
    font-weight: 600;
  }
`;

export const Footer = styled.footer`
  z-index: 1;
  position: sticky;
  height: 65px;
  width:100%;
  background-color: #fff;
  div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
  }
  p{
  font-family: 'Roboto',sans-serif;
  }
`
