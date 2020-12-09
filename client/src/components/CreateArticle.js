import React from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {useForm,useFieldArray,useWatch} from "react-hook-form";
import {
    FormInput,
    FormInputContainer,
    FormContainer,
    FormTextArea,
    FormButtonContainer,
    BoxButtonSmall,
    BoxButton
} from '../styled/Styled.js';


function CreateArticle(){
    const {register,control} = useForm()
    const {fields,append,remove} = useFieldArray({
        control,
        name: 'items'
    })
    const addSection = (e) => {
        append({})
        e.preventDefault();
    }
    const removeSection = (e) => {
        remove({})
        e.preventDefault();
    }

    return(
        <FormContainer action="">
            <FormInputContainer>
                <p>Tittel</p>
                <FormInput className="border" type="text" placeholder="Tittel" id="tittel" name="tittle"/>
                <p>Ingress</p>
                <FormTextArea className="border" type="text" placeholder="Ingress" id="ingress" name="ingress"/>
                <BoxButtonSmall className="green" onClick={addSection}>Add section</BoxButtonSmall>
                {fields.map(({id}) =>(
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={id}>
                            <p>Subtittel</p>
                            <FormInput className="border" type="text" placeholder="Subtitle" id="subtitle" name="subtitle"/>
                            <p>Paragraf</p>
                            <FormTextArea className="border" type="text" placeholder="Paragraf" id="paragraf" name="paragraph"/>
                            <FormButtonContainer>
                                <BoxButtonSmall className="red" onClick={removeSection}>Remove</BoxButtonSmall>
                            </FormButtonContainer>
                        </motion.div>
                    </AnimatePresence>
                ))}
                {fields.length > 0 &&(
                    <BoxButton className="blue">Publish</BoxButton>
                )}
            </FormInputContainer>
        </FormContainer>
    )
}

export default CreateArticle;