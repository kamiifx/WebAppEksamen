import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {get} from '../utiils/officeService';
import { useParams } from 'react-router-dom';
import {Article, ArticleHeader, ArticleHeaderCont, Header} from "../styled/Styled";


const EmplooyeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  img{
  width: 10rem;
  }
`;

const EmployeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79rem;
  height: 35rem;
  margin-top: 35px;
  margin-bottom: 72px;
  background-color: ${({ theme }) => theme.colors.header};
`

function OfficeDetail(){
    const [office, setOffice] = useState(null);
    const { id } = useParams();

    useEffect(async () => {
        if(id){
            const {data} = await get(id)
            console.log(data)
            setOffice(data)
        }
    },[id]);


    return(
        <div>
            {office &&(
                <Article className="widthH">
                    <ArticleHeaderCont>
                        <h2>Velkommen til {office.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </ArticleHeaderCont>
                    <ArticleHeader>
                        <h2>Våre Ansatte</h2>
                    </ArticleHeader>
                    <EmployeContainer>
                        {office &&
                        office.employees.map((emp) =>(
                            <EmplooyeBox>
                                <img src="https://miro.medium.com/max/800/0*PY9KEuEQ7-D-I-0u" alt=""/>
                                <p>{emp}</p>
                            </EmplooyeBox>
                        ))}
                    </EmployeContainer>
                    <Contact>
                        <h2>Kontakt oss på {office.phone} </h2>
                    </Contact>
                </Article>
            )}

        </div>
    )
}

export default OfficeDetail;