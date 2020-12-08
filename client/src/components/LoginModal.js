import React from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import {login} from "../utiils/authService";
import {BoxButton} from "../styled/Styled";

const ModalBody = styled(motion.div)`
position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`
const Modal = styled.div`
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30rem;
  height: 30rem;
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
const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13%;
  justify-content: center;
  margin-bottom: 40px;
  font-family: 'Roboto',sans-serif;
  p{
  font-size: 20px;
  color:${({ theme }) => theme.colors.grayed} ;
  }
`;
const FormInput = styled.input`
  width: 22rem;
  height: 3rem;
  border-radius: 7px;
  border:none;
  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  color:${({ theme }) => theme.colors.grayText} ;
`
const FormButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
`




function LoginModal({modal,setModalOn}){
    const {register,errors,handleSubmit,formState} = useForm({mode:'onBlur'})


    const variants = {
        open:{scale:[0,1,1.1,1]},
        closed:{opacity:0}
    }



    return(
            <ModalBody animate={modal ? "open" : "closed"} variants={variants} transition={{duration:0.45}}  style={{display:modal?"block":"none"}}>
                <Modal>
                    <ModalHeader>
                        <img src="https://img.icons8.com/pastel-glyph/2x/plumbing.png" alt=""/>
                        <div>
                            <p>Login</p>
                            <h4>FG Rørleggerservice</h4>
                        </div>
                        <motion.span  whileHover={{rotate:180}} onClick={() => setModalOn(false)}>&#10005;</motion.span>
                    </ModalHeader>
                    <form action="">
                        <FormInputContainer>
                            <p>Email</p>
                            <FormInput type="text" placeholder="Email"/>
                            <p>Password</p>
                            <FormInput type="text" placeholder="Password"/>
                        </FormInputContainer>
                        <FormButtonContainer>
                            <BoxButton whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }} type="submit" className="green">Login</BoxButton>
                            <BoxButton whileHover={{ scale: 1.1}} whileTap={{ scale: 1 }} type="submit" className="blue">Register</BoxButton>
                        </FormButtonContainer>
                    </form>
                </Modal>
            </ModalBody>
    )
}

export default LoginModal;