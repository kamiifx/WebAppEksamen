import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
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
  body{
    background-color: #F7FAFC;
  }  
  ${normalize}
`;

export {GlobalStyle};