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
            {article &&
            article.subtitle.map((articles) => (
                <div key={articles.id}>
                    <p>{articles}</p>
                </div>
            ))
            }
        </div>
    )
}

export default ArticlePage;