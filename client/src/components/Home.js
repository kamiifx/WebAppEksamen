import React, {useState} from 'react';
import LoginModal from "./LoginModal";
import {Header, FlexBox, FlexItemBox, Footer,Main} from "../styled/Styled";

function Home({modal,setModal}){

    return(
        <div>
            <LoginModal modal={modal} setModalOn={setModal}/>
            <Main>
                <Header>
                    <h2>Velkommer til FG Rørleggerservice AS</h2>
                </Header>
                <FlexBox>
                    <FlexItemBox><a href="/">Kontorer</a></FlexItemBox>
                    <FlexItemBox className="med"><a href="/">Kontakt</a></FlexItemBox>
                    <FlexItemBox className="big"><a href="/articles">Se våre fagartikler om oppussing av bad</a></FlexItemBox>
                </FlexBox>
            </Main>
            <Footer>
                <div>
                    <p>Orgnr: 007 007 007</p>
                    <p>lg@igror.no</p>
                    <p>99 00 00 00</p>
                </div>
            </Footer>
        </div>
    )
}

export default Home;