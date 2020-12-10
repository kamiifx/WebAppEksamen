import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {list} from '../utiils/articleService';
import {Header,Container,ArticleBlock,ArticleIntro,BoxButton} from '../styled/Styled';
import {useAuthContext} from "../contex/authProvider";

function Articles(){
    const [articles, setArticles] = useState(null)
    const [error, setError] = useState(null)
    const { isLoggedIn, isAdmin } = useAuthContext();

    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list();
            console.log(data)
            console.log(isAdmin.toString())
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
                <h2>Fagartikler </h2>
            </Header>

            <Container>
                {isLoggedIn&&isAdmin&&(
                    <Link to="/article/create">
                        <BoxButton className="blue">NY ARTIKKEL</BoxButton>
                    </Link>
                )}
                <Container className="left">
                    <BoxButton>SØK</BoxButton>
                    <BoxButton>FILTER</BoxButton>
                </Container>
            </Container>

            {articles &&
                articles.map((articles) => (
                    <Container className="min" key={articles.id}>
                        {isLoggedIn&&articles.secret&&(
                        <ArticleBlock>
                            <a href={`/articles/${articles.id}`}>BILDE</a>
                            <ArticleIntro>
                                <h2>{articles.tittle}</h2>
                                <p>{articles.ingress}</p>
                            </ArticleIntro>
                            <h4 className="kat">{articles.category}</h4>
                        </ArticleBlock>
                        )}
                        {!articles.secret&&(
                            <ArticleBlock>
                                <a href={`/articles/${articles.id}`}>BILDE</a>
                                <ArticleIntro>
                                    <h2>{articles.tittle}</h2>
                                    <p>{articles.ingress}</p>
                                </ArticleIntro>
                                <h4 className="kat">{articles.category}</h4>
                            </ArticleBlock>
                        )}

                        </Container>
                ))
            }
        </div>
    )
}

export default Articles;