import React, {useState} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {useHistory} from 'react-router-dom';
import Image from './Image';
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
    const [imageId, setImageIdArticle] = useState(null);


    const onSubmit = async (userdata) => {
        const {data} = await create(userdata)
        if (!data.success){
            setError(data.message)
            console.log("here ?")
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
        name:'Subtitle',
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
        <div>
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
                        <input type="checkbox" name="secret" ref={register}/>
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
                    <p>ImageID</p>
                    <FormInput className="border" type="text" placeholder="imageId" id="imageId" name="imageId" readonly value={imageId} ref={register}/>
                    {fields.length > 0 &&(
                        <BoxButtonMarg type="submit" className="blue">Publish</BoxButtonMarg>
                    )}
                </FormInputContainer>

            </FormContainer>
            < Image imageId={imageId} setImageIdArticle={setImageIdArticle}/>
            <p></p>

        </div>



    )
}

export default CreateArticle;