import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {list} from '../utiils/officeService';
import {Header,Container,ArticleBlock,ArticleIntro,BoxButton} from '../styled/Styled';
import {useAuthContext} from "../contex/authProvider";



function Offices(){
    const [offices, setOffices] = useState(null)
    const [error, setError] = useState(null)
    const { isLoggedIn, isAdmin } = useAuthContext();
    const [officesLocations, setOfficesLocations] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list();
           /* console.log(data)
            console.log(isAdmin.toString())*/
            if (error){
                setError(error)
            }else {
                setOffices(data)
                setOfficesLocations(data);
            }
        };
        fetchData();
    },[])
    /*const sortByLocation =  () => {

        const locMap = new Map();

        offices.map(office => {
           locMap.set("location" ,office.location)
        });
        console.log(locMap)
    }
    /!*const counts = mediaTypes
        .map(mediaType => ({
            type: mediaType,
            count: data.filter(item => item.media_type === mediaType).length
        }));*!/
*/

    const counter = (loc) => {
        let noneCount = 0;
        offices.map(office => {
            if (office.location === loc) {
                noneCount++;
            }
        });
        //console.log(noneCount+  " counter");
        return noneCount;

    };
    return(
        <div>
            <Header>
                <h2>Fagartikler </h2>
            </Header>

            <Container>
                <Container className="left">
                    <BoxButton>SØK</BoxButton>
                    <BoxButton>FILTER</BoxButton>

                </Container>
            </Container>

            {offices &&
            offices.map((office) => (
                <Container className="min" key={office.id}>
                    <ArticleBlock>

                        <ArticleIntro>
                            <h2>{office.location + " (" + counter(office.location) + ")"}</h2>
                            <p>{office.address } </p>
                        </ArticleIntro>
                        <h4 className="kat">{office.phone }</h4>
                    </ArticleBlock>
                </Container>
            ))
            }

        </div>
    )
}

export default Offices;