import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {list} from '../utiils/officeService';
import {Header, Container, ArticleBlock, ArticleIntro, BoxButton, SmallContainer} from '../styled/Styled';
import {useAuthContext} from "../contex/authProvider";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';


const OfficeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  border: 1px solid black;
  margin: 10px;
  width: 13rem;
  h3{
  margin-bottom: -10px;
  font-family: 'Roboto',sans-serif;
  }
  &:hover{
  cursor: pointer;
  }
`

function Offices(){
    const [offices, setOffices] = useState(null)
    const [error, setError] = useState(null)
    const { isLoggedIn, isAdmin } = useAuthContext();
    const [officesLocations, setOfficesLocations] = useState(null)
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list();
            console.log(data)
            if (error){
                setError(error)
            }else {
                setOffices(data)
                setOfficesLocations(data);
            }
        };
        fetchData();
    },[])

    return(
        <div>
            <Header>
                <h2>Kontorer</h2>
            </Header>
            <Container>
                <Container className="left">
                    <BoxButton>SØK</BoxButton>
                    <BoxButton>FILTER</BoxButton>

                </Container>
            </Container>
            <h2 style={{marginLeft:"11rem",fontFamily:'Roboto'}}>Fredrikstad</h2>
            <SmallContainer>
                {offices &&
                offices.map(office => {
                    if (office.location === "Fredrikstad"){
                        return(
                                <OfficeBox onClick={() => {history.push(`/offices/${office._id}`)}} key={office.id}>
                                    <h3>{office.name}</h3>
                                    <p>{office.location}</p>
                                    <p>{office.email}</p>
                                    <h4>{office.phone}</h4>
                                </OfficeBox>
                        )}}
                )}
            </SmallContainer>
            <h2 style={{marginLeft:"11rem",fontFamily:'Roboto'}}>Sarpsborg</h2>
            <SmallContainer>
                {offices &&
                offices.map(office => {
                    if (office.location === "Sarpsborg"){
                        return(
                            <OfficeBox onClick={() => {history.push(`/offices/${office.id}`)}} key={office.id}>
                                <h3>{office.name}</h3>
                                <p>{office.location}</p>
                                <p>{office.email}</p>
                                <h4>{office.phone}</h4>
                            </OfficeBox>
                        )}}
                )}
            </SmallContainer>
            <h2 style={{marginLeft:"11rem",fontFamily:'Roboto'}}>Halden</h2>
            <SmallContainer>
                {offices &&
                offices.map(office => {
                    if (office.location === "Halden"){
                        return(
                            <OfficeBox onClick={() => {history.push(`/offices/${office.id}`)}} key={office.id}>
                                <h3>{office.name}</h3>
                                <p>{office.location}</p>
                                <p>{office.email}</p>
                                <h4>{office.phone}</h4>
                            </OfficeBox>
                        )}}
                )}
            </SmallContainer>
            <h2 style={{marginLeft:"11rem",fontFamily:'Roboto'}}>Moss</h2>
            <SmallContainer>
                {offices &&
                offices.map(office => {
                    if (office.location === "Moss"){
                        return(
                            <OfficeBox onClick={() => {history.push(`/offices/${office.id}`)}} key={office.id}>
                                <h3>{office.name}</h3>
                                <p>{office.location}</p>
                                <p>{office.email}</p>
                                <h4>{office.phone}</h4>
                            </OfficeBox>
                        )}}
                )}
            </SmallContainer>
        </div>
    )
}

export default Offices;