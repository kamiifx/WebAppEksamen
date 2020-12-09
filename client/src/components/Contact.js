import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {Header,Container,ArticleBlock,ArticleIntro,BoxButton} from '../styled/Styled';
import { create } from '../utiils/contactService.js';
import { useForm } from 'react-hook-form';



function Contact(){
    const [closeBtnState, setCloseBtnState] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async (formData) => {
        const { data } = await create(formData);
        if (!data.success) {
            setCloseBtnState(true);
            setError(data.message);
        } else {
            setSuccess(true);
            setError(null);
            setTimeout(() => {
                history.push(`/events/${data.data.id}`);
            }, 2000);
        }
    };


    return(
        <div>
            <Header>
                <h2>Kontakt oss</h2>
            </Header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label for="from">Name:</label>
                <input id="from"
                       placeholder="from"
                       name="from"
                       type="from"
                       ref={register({
                           required: true,
                       })}/>
                <label for="to">To:</label>
                <input id="to"
                       placeholder="to"
                       name="to"
                       type="to"
                       ref={register({
                           required: true,
                       })}/>
                <label htmlFor="data">Message:</label>
                <input id="data"
                       placeholder="data"
                       name="data"
                       type="data"
                       ref={register({
                           required: true,
                       })}/>
                <button type="submit">Click Me!</button>
            </form>

        </div>
    )
}

export default Contact;