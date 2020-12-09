import React,{useState,useEffect} from 'react';
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
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        from: '',
        to: 'asd',
        data: '',
    });
    const { register, errors, handleSubmit, formState } = useForm({
        mode: 'onBlur',
    });
    useEffect(() => {
        const fetchUserData = async () => {
            if (user === null){
                setLoading(true);
                try {
                    const {data} = await getCurrent();
                    console.log(data)
                    setUser(data)
                }catch (e) {
                    setUser(null);
                }
                setLoading(false)
            }
        };
        fetchUserData();
    },[user]
    )



    const onSubmit = async (formData) => {

        console.log(user.data.name);
        /*const { to } = ""
        formData = {
            ...formData,
            [to]: "adim@damin.com",

        }*/
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
                <label for="from">Name:</label>
                <input id="from"
                       placeholder="from"
                       name="from"
                       type="from"
                       ref={register({
                           required: true,
                       })}/>
                <label htmlFor="to">Name:</label>
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