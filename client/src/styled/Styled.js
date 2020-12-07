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
  background-image:linear-gradient(90deg, rgba(190,190,190,1) 0%, rgba(147,237,255,0.5970588919161415) 100%), url("https://www.rovop.com/assets/img/water-gif.gif");
  background-size: cover;
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

export const FlexItemBox = styled(motion.div)`
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
    background-image: url("https://images.squarespace-cdn.com/content/v1/59a47dc6a803bbb4523bbd19/1509570491705-EC4ZDUB9PVY0Z8Z6EOUC/ke17ZwdGBToddI8pDm48kFmfxoboNKufWj-55Bgmc-J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1hjuviiiZmrL38w1ymUdqq4JaGeFUxjM-HeS7Oc-SSFcg/AdobeStock_112315636.jpeg?format=2500w");
    background-size: cover;
    filter: grayscale(80%);
    &:hover{
    transition: 0.5s ease-in-out;
    filter: grayscale(0%);
    box-shadow:${({ theme }) => theme.shadows.lg};
    }
  }
  &.big{
  margin-top: 35px;
  width: 117rem;
  height: 35rem;
  margin-bottom: 6rem;
  background-image: url("https://www.fsbna.com/res/Media/fsbna.com/Media/Keyvisuals/FSB-Bathroom-Title-01/1/FSB-Bathroom-Title-01.jpg");
  background-size: cover;
  filter: grayscale(80%);
  &:hover{
  transition: 0.5s ease-in-out;
  filter: grayscale(0%);
  box-shadow:${({ theme }) => theme.shadows.lg};
  }
  }
  &.office{
    background-image: url("https://www.incimages.com/uploaded_files/image/1920x1080/getty_1083827690_421509.jpg");
    background-size: cover;
    filter: grayscale(80%);
    &:hover{
    transition: 0.5s ease-in-out;
    filter: grayscale(0%);
    box-shadow:${({ theme }) => theme.shadows.lg};
    }
   
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
