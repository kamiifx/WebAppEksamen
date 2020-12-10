import React, {useState, useEffect} from 'react';
import {motion,AnimatePresence} from "framer-motion";
import {useHistory, useParams} from 'react-router-dom';
import Image from './Image';
import {useForm,useFieldArray} from "react-hook-form";
import {edit, get} from '../utiils/articleService'
import {
    FormInput,
    FormInputContainer,
    FormContainer,
    FormTextArea,
    FormButtonContainer,
    BoxButtonSmall,
    BoxButtonMarg,
} from '../styled/Styled.js';


function EditArticle(){
    const [article, setArticle] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const history = useHistory();
    const [ setImageIdArticle] = useState(null);
    const { id } = useParams();
    const [imageId, setImageId] = useState(null);
    const [src, setSrc] = useState(null);
    const [tittle, setTittle] = useState('');
    const [ingress, setIngress] = useState('');
    const [category, setCategory] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [paragraph, setParagraph] = useState('');


    useEffect(async () => {
        if(id){
            const {data} = await get(id)
            setArticle(data)
            setImageId(data.imageId);
            setTittle(data.tittle)
            setIngress(data.ingress)
            setTittle(data.tittle)
            setCategory(data.category)
            setSubtitle(data.subtitle)
            setParagraph(data.paragraph)


        }


    },[id])
        const onSubmit = async (userdata) => {
        const {data} = await edit(id, userdata)
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
            <p></p>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>


                <FormInputContainer>


                        <p>Tittel</p>

                    <FormInput className="border" type="text" placeholder="Tittel"  defaultValue={tittle} id="tittle" name="tittle" ref={register}/>
                    <p>Ingress</p>
                    <FormTextArea className="border" type="text" placeholder="Ingress" defaultValue={ingress} id="ingress" name="ingress" ref={register}/>
                    <p>Kategori</p>
                    <FormInput className="border" type="text" placeholder="kategori" id="category" defaultValue={category}name="category" ref={register}/>

                    <FormButtonContainer>
                        <BoxButtonSmall className="green" onClick={addSection}>Add section</BoxButtonSmall>
                        <input type="checkbox" name="secret" ref={register}/>
                    </FormButtonContainer>
                    {fields.map(({id}, index) =>(
                        <AnimatePresence>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={id}>
                                <p>Subtittel {index}</p>
                                <FormInput className="border" type="text" placeholder="Subtitle" id="subtitle" defaultValue={subtitle[index]} name={`subtitle[${index}]`} ref={register}/>

                                <p>Paragraf {index}</p>
                                <FormTextArea className="border" type="text" placeholder="Paragraf" id="paragraph" defaultValue={paragraph[index]} name={`paragraph[${index}]`} ref={register}/>
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

            <p></p>

        </div>



    )
}

export default EditArticle;