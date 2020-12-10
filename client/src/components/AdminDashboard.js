import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {list,get} from '../utiils/contactService.js'
import {ContainerFlex} from "../styled/Styled";

function AdminDashboard(){
    const [mail, setMail] = useState(null);
    const [mailId,setMailId] = useState(null);

    const Item = styled.div`
      display: flex;
      width: 30rem;
      justify-content: center;
      margin-bottom: 30px;
      border-radius: 5px;
      height: auto;
      background-color:${({ theme }) => theme.colors.default};
      box-shadow:${({ theme }) => theme.shadows.sm}; ;
      font-family: 'Roboto',sans-serif;
      color:${({ theme }) => theme.colors.grayText} ;
    `
    useEffect(() => {
        const fetchEmails = async () => {
            const {data} = await list();
            console.log(data)
            setMail(data)
        }
        const fetchEmailData= async () =>{

        }
        fetchEmails();
    },[])
    return(
        <ContainerFlex>
            <h3>Email</h3>
                {mail &&
                mail.map((mails) => (
                    <Item key={mails.id}>
                        <h3>{mails.subject}</h3>
                    </Item>
                ))}

        </ContainerFlex>
    )
}

export default AdminDashboard;