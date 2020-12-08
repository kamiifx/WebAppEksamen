import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&family=Roboto+Mono:wght@500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  p{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  },
  h2{
    font-family: 'Roboto',sans-serif;
  },
  h3{
    font-family: 'Noto Sans KR',sans-serif;
  },
  a{
    text-decoration: none;
    color: black;
  },
  main{
  background-color: #F7FAFC;
  }
  
  ${normalize}
`;


export {GlobalStyle};