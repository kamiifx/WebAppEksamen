import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {list,get} from '../utiils/contactService.js'
import {listUsers} from '../utiils/authService.js'
import {ContainerFlex} from "../styled/Styled";

function AdminDashboard(){
    const [mail, setMail] = useState(null);
    const [users, setUsers] = useState(null);
    const [open,setOpen] = useState(false)
    const Item = styled(motion.div)`
      display: flex;
      width: 30rem;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      border-radius: 5px;
      height: auto;
      background-color:${({ theme }) => theme.colors.default};
      box-shadow:${({ theme }) => theme.shadows.sm}; ;
      font-family: 'Roboto',sans-serif;
      color:${({ theme }) => theme.colors.grayText} ;
    `;
    const ItemContent = styled(motion.div)`
      
    `;
    const BigContainer = styled.div`
      display: flex;
      flex-direction: row;
    `
    useEffect(() => {
        const fetchEmails = async () => {
            const {data} = await list();
            setMail(data)
        }
        const fetchUsers = async () => {
            const {data} = await listUsers();
            setUsers(data)
            console.log(users)
        }
        fetchUsers();
        fetchEmails();
    },[])
    return(
        <BigContainer>
            <ContainerFlex>
                <h3>Email</h3>
                {mail &&
                mail.map((mails) => (
                    <Item onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} initial={{height:50}} whileHover={{height:150}} key={mails.id}>
                        <h3>{mails.subject}</h3>
                        <ItemContent initial={{opacity:0 ,display:"none"}} whileHover={{opacity:1}} animate={{display:open?"block":"none"}}>
                            <p>From: {mails.from}</p>
                            <p>{mails.message}</p>
                        </ItemContent>
                    </Item>
                ))}
            </ContainerFlex>
            <ContainerFlex>
                <h3>Dev</h3>
                <p>Users: </p>
                {users &&
                users.map((user) => (
                    <Item>
                        <p>{user.email}</p>
                    </Item>
                ))}
            </ContainerFlex>
        </BigContainer>

    )
}

export default AdminDashboard;