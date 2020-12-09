import React, {useState} from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {login,create} from "../utiils/authService";
import {useAuthContext} from "../contex/authProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BoxButton,FormButtonContainer,FormInput,FormInputContainer} from "../styled/Styled";


const ModalBody = styled(motion.div)`
position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`
const Modal = styled(motion.div)`
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30rem;
  height: 32rem;
  background-color: ${({ theme }) => theme.colors.default};
  margin-right: -50%;
  transform: translate(-50%, -50%); 
  border-radius: 1rem;
  box-shadow:${({ theme }) => theme.shadows.lg} ;
`;
const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayText};
  
  img{
  width: 40px;
  height: 40px;
  margin-left: 20px;
  }
  p{
  font-size: 26px;
  font-family: 'Roboto',sans-serif;
  }
  h4{
  font-size: 15px;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  margin-top: -22px;
  color: ${({ theme }) => theme.colors.grayText};
  }
  div{
  flex-direction: column;
  margin-left: 20px;
  }
  span{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 47%;
  margin-bottom: 55px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.redDeny};
  width: 25px;
  height: 25px;
  font-weight: 600;
  &:hover{
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.alert};
  transition: 0.5s ease-in-out;
  }
  }
`;




function LoginModal({modal,setModalOn}){

    const [success, setSuccess] = useState(false);
    const [error,setError] = useState(null);
    const [reg,setReg] = useState(false);
    const {register,errors,handleSubmit} = useForm({mode:'onBlur'})
    const {setUser} = useAuthContext();



    const variants = {
        open:{scale:[0,1,1.1,1]},
        closed:{opacity:0}
    }
    const variants2 = {
        true:{height:"37rem"},
        false:{height: "30rem"}
    }


    const onSubmit = async (userdata) => {
        console.log("submit")
        if (reg === false){
            const {data} = await login(userdata);
            if (!data.success){
                setError(data.message[0].message);
                toast.error(data.message[0].message);
                toast.error(data.message);

            }else {
                const user = data?.user;
                const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
                setUser({...user,expire});
                setSuccess(true);
                setModalOn(false);
            }
        }else {
            const data = await create(userdata);
            if(!data.success && data.message != null){
                toast.error(data.message[0].message);
                toast.error(data.message);
            }else {
                setModalOn(false);
                setSuccess(true);
            }
        }
    };

    return(
            <ModalBody animate={modal ? "open" : "closed"} variants={variants} transition={{duration:0.45}}  style={{display:modal?"block":"none"}}>
                <ToastContainer/>
                <Modal animate={reg? "true":"false"} variants={variants2}>
                    <ModalHeader>
                        <img src="https://img.icons8.com/pastel-glyph/2x/plumbing.png" alt=""/>
                        <div>
                            <p>Login</p>
                            <h4>FG Rørleggerservice</h4>
                        </div>
                        <motion.span  whileHover={{rotate:180}} onClick={() => setModalOn(false)}>&#10005;</motion.span>
                    </ModalHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormInputContainer>
                            <p>Email</p>
                            <FormInput type="text" placeholder="Email" id="email" name="email" ref={register({required:true,})}/>
                            <p>Password</p>
                            <FormInput type="text" placeholder="Password" id="password" name="password" ref={register({required:true,})}/>
                            {reg &&(
                                <div>
                                    <p>Navn</p>
                                    <FormInput type="text" placeholder="Navn" id="name" name="name" ref={register({required:true,})}/>
                                </div>
                            )}
                        </FormInputContainer>
                        <FormButtonContainer className="center">
                            <BoxButton whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }} type="submit" className="green">{reg? "Register": "Login"}</BoxButton>
                            <BoxButton style={{display:reg?"none":"block"}} whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }} onClick={()=> setReg(!reg)} className="blue">Register</BoxButton>
                        </FormButtonContainer>
                    </form>
                </Modal>
            </ModalBody>

    )
}

export default LoginModal;