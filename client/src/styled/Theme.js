import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./Global";

const theme = {
    body:'#FFF',
    colors:{
        default:'#F7FAFC',
        greenAccept:'#68D391',
        redDeny:'#FC8181',
        alert:'#E53E3E',
        accept:'#63B3ED',
        acceptHover: '#90CDF4',
        grayText:'#718096'
    },
    shadows:{
        sm:'0px 0px 25px 0px rgba(0,0,0,0.25);',
        md:'0px 0px 25px 0px rgba(0,0,0,0.45);',
        lg:'0px 0px 25px 0px rgba(0,0,0,0.55);',
        hg:'0px 0px 25px 0px rgba(0,0,0,0.75);'
    },

}

const Theme = ({children}) => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);

export default Theme;