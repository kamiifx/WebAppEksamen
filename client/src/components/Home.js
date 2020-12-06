import React from 'react';
import styled from 'styled-components';
import {Header} from "../styled/Styled";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 13%;
  max-width: 90%;
`

const FlexItemBox = styled.div`
  display: flex;
  justify-content: center;
  width: 40rem;
  height: 25rem;
  background-color:${({ theme }) => theme.colors.header};
  margin-left: 20px;
  &.med{
  width: 74.8rem;
  }
  &.big{
  margin-top: 35px;
  width: 116rem;
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