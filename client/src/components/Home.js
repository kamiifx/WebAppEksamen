import React from 'react';
import styled from 'styled-components';
import {Header} from "../styled/Styled";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 13%;
  max-width: 94%;
`

const FlexItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
  background-color:${({ theme }) => theme.colors.header};
  margin-left: 20px;
  &.med{
  width: 84.7rem;
  }
  &.big{
  margin-top: 35px;
  width: 116rem;
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
`

function Home(){
    return(
        <main>
            <Header>
                <h2>Velkommer til FG Rørleggerservice AS</h2>
            </Header>
            <FlexBox>
                <FlexItemBox><a href="/">Kontorer</a></FlexItemBox>
                <FlexItemBox className="med"><a href="/">Kontakt</a></FlexItemBox>
                <FlexItemBox className="big"><a href="/articles">Se våre fagartikler om oppussing av bad</a></FlexItemBox>
            </FlexBox>
        </main>
    )
}

export default Home;