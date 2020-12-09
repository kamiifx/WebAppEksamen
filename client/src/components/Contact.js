import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {Header,Container,ArticleBlock,ArticleIntro,BoxButton} from '../styled/Styled';
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
    const [loading, setLoading] = useState(false)
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


        //console.log(data.data.name + " User");

        //currentUser = user.data.name;
        console.log(currentUserName + " User");
       /*formData = {
            "from": "user@mail.com",
            "to": "admin@mail.com",
            "massage": "asdasd",

        };*/
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Navn:</label>
                <input id="name"
                       placeholder="name"
                       value={currentUserName}
                       name="name"
                       type="name"
                       ref={register({
                           required: true,
                       })}/>
                <label htmlFor="from">From:</label>
                <input id="from"
                       placeholder="from"
                       name="from"
                       type="from"
                       value={currentUserEmail}
                       ref={register({
                           required: true,
                       })}/>
                <label htmlFor="message">Message:</label>
                <input id="message"
                       placeholder="message"
                       name="message"
                       type="message"
                       ref={register({
                           required: true,
                       })}/>
                <button type="submit">Send!</button>
            </form>

        </div>
    )
}

export default Contact;