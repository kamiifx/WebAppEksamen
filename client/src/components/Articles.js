import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {list} from '../utiils/articleService';
import {Header,Container,ArticleBlock,ArticleIntro} from '../styled/Styled';


const BoxButton = styled.button`
  background-color:${({ theme }) => theme.colors.header};
  border: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 600;
  color: white;
  width: 10rem;
  height: 5rem;
  &.blue{
      background-color:${({ theme }) => theme.colors.accept};
  }
`;


function Articles(){
    const [articles, setArticles] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list();
            console.log(data)

            if (error){
                setError(error)
            }else {
                setArticles(data)
            }
        };
        fetchData();
    },[])
    return(
        <div>
            <Header>
                <h2>Fagartikler</h2>
            </Header>

            <Container>
                <BoxButton className="blue">NY ARTIKKEL</BoxButton>
                <Container className="left">
                    <BoxButton>SØK</BoxButton>
                    <BoxButton>FILTER</BoxButton>
                </Container>
            </Container>

            {articles &&
                articles.map((articles) => (
                    <Container key={articles.id}>
                        <ArticleBlock>
                            <a href={`/articles/${articles.id}`}>BILDE</a>
                            <ArticleIntro>
                                <h2>{articles.tittle}</h2>
                                <p>{articles.paragraph[0]}</p>
                            </ArticleIntro>
                            <h4 className="kat">kategori</h4>
                        </ArticleBlock>
                    </Container>
                ))
            }
        </div>
    )
}

export default Articles;