import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {get} from '../utiils/articleService'


function ArticlePage(){
    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(async () => {
        if(id){
            const {data} = await get(id)
            console.log(data)
            setArticle(data)
        }
    },[id])

    return(
        <div>
            {article && (
                <div>
                    <p>{article.author}</p>
                    <p>{article.title}</p>
                    <p>{article.subtitle[0]}</p>
                    <p>{article.paragraph[0]}</p>
                    <p>{article.subtitle[1]}</p>
                    <p>{article.paragraph[1]}</p>
                </div>
            )}
        </div>
    )
}

export default ArticlePage;