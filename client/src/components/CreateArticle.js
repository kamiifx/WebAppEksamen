import React, {useState} from 'react';
import {
    FormInput,
    FormInputContainer,
    FormContainer,
    FormInputBig,
    MotionButton,
    FormButtonContainer
} from '../styled/Styled.js';


function CreateArticle(){
    const addHeight = (e) =>{
        setParHeight(parHeight + 100)
        e.preventDefault()
    }
    const removeHeiht = (e) => {
        if (parHeight > 100){
            setParHeight(parHeight - 100)
        }
        e.preventDefault()
    }
    const [parHeight,setParHeight] = useState(50);
    return(
        <FormContainer action="">
            <FormInputContainer>
                <p>Tittel</p>
                <FormInput className="border" type="text" placeholder="Tittel" id="tittel" name="tittle"/>
                <p>Ingress</p>
                <FormInputBig className="border" type="text" placeholder="Ingress" id="ingress" name="ingress"/>
                <p>Paragraf</p>
                <FormButtonContainer>
                    <MotionButton onClick={addHeight}>&#10133;</MotionButton>
                    <MotionButton onClick={removeHeiht}>&#10134;</MotionButton>
                </FormButtonContainer>

                <FormInputBig animate={{"height":parHeight}} className="border" type="text" placeholder="Paragraf" id="paragraf" name="paragraph"/>
            </FormInputContainer>
        </FormContainer>
    )
}

export default CreateArticle;