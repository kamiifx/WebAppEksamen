import React, {useState} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {useHistory} from 'react-router-dom';

import {useForm,useFieldArray} from "react-hook-form";
import {create} from '../utiils/articleService'
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
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const history = useHistory();

    const onSubmit = async (userdata) => {
        const {data} = await create(userdata)
        if (!data.success){
            setError(data.message)
        }else {
            setSuccess(true);
            setTimeout(() => {
                history.push(`/articles/${data.data.id}`);
            }, 2000);
        }
    };



    const {register,control,handleSubmit} = useForm()
    const {fields,append,remove} = useFieldArray({
        control,
        name:''
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
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormInputContainer>
                <p>Tittel</p>
                <FormInput className="border" type="text" placeholder="Tittel" id="tittle" name="tittle" ref={register}/>
                <p>Ingress</p>
                <FormTextArea className="border" type="text" placeholder="Ingress" id="ingress" name="ingress" ref={register}/>
                <p>Kategori</p>
                <FormInput className="border" type="text" placeholder="kategori" id="category" name="category" ref={register}/>
                <FormButtonContainer>
                    <BoxButtonSmall className="green" onClick={addSection}>Add section</BoxButtonSmall>
                    <input type="checkbox" name="secret"/>
                </FormButtonContainer>
                {fields.map(({id}, index) =>(
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={id}>
                            <p>Subtittel {index}</p>
                            <FormInput className="border" type="text" placeholder="Subtitle" id="subtitle" name={`subtitle[${index}]`} ref={register}/>
                            <p>Paragraf {index}</p>
                            <FormTextArea className="border" type="text" placeholder="Paragraf" id="paragraph" name={`paragraph[${index}]`} ref={register}/>
                            <FormButtonContainer>
                                <BoxButtonSmall className="red" onClick={removeSection}>Remove</BoxButtonSmall>
                            </FormButtonContainer>
                        </motion.div>
                    </AnimatePresence>
                ))}
                {fields.length > 0 &&(
                    <BoxButtonMarg type="submit" className="blue">Publish</BoxButtonMarg>
                )}
            </FormInputContainer>
        </FormContainer>
    )
}

export default CreateArticle;