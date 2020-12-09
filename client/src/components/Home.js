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
                    <FlexItemBox className="office" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}><a href="/">Kontorer</a></FlexItemBox>
                    <FlexItemBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="med"><a href="/">Kontakt</a></FlexItemBox>
                    <FlexItemBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="big"><a href="/articles">Se våre fagartikler om oppussing av bad</a></FlexItemBox>
                </FlexBox>
            </Main>
        </div>
    )
}

export default Home;