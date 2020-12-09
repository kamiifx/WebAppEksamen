import React from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {useForm,useFieldArray} from "react-hook-form";
import {
    FormInput,
    FormInputContainer,
    FormContainer,
    FormTextArea,
    FormButtonContainer,
    BoxButtonSmall,
    BoxButtonMarg,
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
                <p>Kategori</p>
                <FormInput className="border" type="text" placeholder="kategori" id="category" name="category"/>
                <FormButtonContainer>
                    <BoxButtonSmall className="green" onClick={addSection}>Add section</BoxButtonSmall>
                    <BoxButtonSmall className="green">Secret</BoxButtonSmall>
                </FormButtonContainer>
                {fields.map(({id}, index) =>(
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={id}>
                            <p>Subtittel {index}</p>
                            <FormInput className="border" type="text" placeholder="Subtitle" id="subtitle" name="subtitle" ref={register}/>
                            <p>Paragraf {index}</p>
                            <FormTextArea className="border" type="text" placeholder="Paragraf" id="paragraf" name="paragraph" ref={register}/>
                            <FormButtonContainer>
                                <BoxButtonSmall className="red" onClick={removeSection}>Remove</BoxButtonSmall>
                            </FormButtonContainer>
                        </motion.div>
                    </AnimatePresence>
                ))}
                {fields.length > 0 &&(
                    <BoxButtonMarg className="blue">Publish</BoxButtonMarg>
                )}
            </FormInputContainer>
        </FormContainer>
    )
}

export default CreateArticle;