import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {Header,Container,ArticleBlock,ArticleIntro,BoxButton, FormInput, FormInputContainer, FormButtonContainer, FormTextArea } from '../styled/Styled';
import { create } from '../utiils/contactService.js';
import { useForm } from 'react-hook-form';
import {useAuthContext} from "../contex/authProvider.js";
import {getCurrent} from "../utiils/authService";



function Contact(){
    const [closeBtnState, setCloseBtnState] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    const {user, setUser} = useAuthContext();
    const [currentUserName, setCurrentUserName] = useState(null);
    const [currentUserEmail, setCurrentUserEmail] = useState(null);
    const [loading, setLoading] = useState(false);
    //const [fromData, setFormData] = useState(null);
    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onBlur',
    });

    useEffect( () =>   {
        const fetchUserData = async () => {
            const {data} = await getCurrent();
            console.log(data.data.name + " data !!!!!!!!!!!!!!!!!!!");

            setCurrentUserName(data.data.name);
            setCurrentUserEmail(data.data.email);
        };
        fetchUserData();
    }, []);


    const onSubmit = async (formData) => {


        const { data } = await create(formData);
        if (!data.success) {
            setCloseBtnState(true);
            setError(data.message);
        } else {
            setSuccess(true);
            setError(null);

        }
    };


    return(
        <div>

            <Header>
                <h2>Kontakt oss</h2>
            </Header>
                <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInputContainer>
                <p >Navn:</p>
                <FormInput id="name"
                       placeholder="name"
                       value={currentUserName}
                       name="name"
                       type="name"
                           className="border"
                           ref={register({
                           required: true,
                       })}/>
                <p >From:</p>
                <FormInput id="from"
                       placeholder="from"
                       name="from"
                       type="from"
                           className="border"
                           value={currentUserEmail}
                       ref={register({
                           required: true,
                       })}/>
                    <p >Subject:</p>
                    <FormInput id="subject"
                                  placeholder="subject"
                                  name="subject"
                                  className="border"
                                  type="message"
                                  ref={register({
                                      required: true,
                                  })}/>
                <p >Message:</p>
                <FormTextArea id="message"
                       placeholder="message"
                       name="message"
                           className="border"
                       type="message"
                       ref={register({
                           required: true,
                       })}/>

                </FormInputContainer>
                <FormButtonContainer className="center" ><BoxButton className="green" type="submit">Send!</BoxButton></FormButtonContainer>

            </form>
            </Container>
        </div>
    )
}

export default Contact;