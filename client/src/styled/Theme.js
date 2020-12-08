import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./Global";

const theme = {
    body:'#FFF',
    colors:{
        default:'#F7FAFC',
        header:'#DBDBDB',
        greenAccept:'#68D391',
        greenHover: '#48BB78',
        redDeny:'#FC8181',
        alert:'#E53E3E',
        accept:'#63B3ED',
        acceptHover: '#90CDF4',
        grayText:'#718096',
        grayed:'#4A5568',
        framerBlue:'#0077FF'
    },
    shadows:{
        sm:'0px 0px 25px 0px rgba(0,0,0,0.25);',
        md:'0px 0px 25px 0px rgba(0,0,0,0.35);',
        lg:'0px 0px 25px 0px rgba(0,0,0,0.45);',
        hg:'0px 0px 25px 0px rgba(0,0,0,0.55);',
    },
    breakpoints:{
        mobileS:'(max-width: 480px)',
        mobileM:'(max-width: 573px)',
    }

}

const Theme = ({children}) => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);

export default Theme;