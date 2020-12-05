import React,{useState,useEffect} from 'react';
import {list} from '../utiils/articleService';

function Articles(){
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            const {data,error} = await list();
            console.log(data)

            if (error){
                setError(error)
            }else {
                setArticle(data)
            }
        };
        fetchData();
    },[])
    return(
        <div>
            articles
        </div>
    )
}

export default Articles;