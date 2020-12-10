import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Header,FormButtonContainer,BoxButton,ArticleHeaderCont,ArticleHeader,Article,ArticleMain} from "../styled/Styled";
import {get ,slett} from '../utiils/articleService'
import {download} from "../utiils/imageService";
import * as url from "url";
import {useAuthContext} from "../contex/authProvider";


function ArticlePage(){
    const [article, setArticle] = useState(null);
    const { id } = useParams();
    const [imageId, setImageId] = useState(null);
    const [src, setSrc] = useState(null);
    const history = useHistory();
    const { isLoggedIn, isAdmin } = useAuthContext();


    useEffect(async () => {
        if(id){
            const {data} = await get(id)
            setArticle(data)
            setImageId(data.imageId);
        }


    },[id])

    const editBtn =  () => {
        console.log("edit HAHAH")
        setTimeout(() => {
            history.push(`/articleedit/${id}`);
        }, 10);
    }
    const deleteArticle = async () => {
        console.log("slett it haha")
        await slett(id);
        setTimeout(() => {
            history.push(`/articles`);
        }, 2000);
    }
    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    }

    const downloadImage = async () => {
        const { data } = await download(imageId);
        console.log(data);
        const img = await data.arrayBuffer().then((buffer) => {
            const base64Flag = 'data:image/jpeg;base64,';
            const imageStr = arrayBufferToBase64(buffer);
            return base64Flag + imageStr;
        });
        console.log(img);
        // const imgUrl = `${process.env.BASE_URL}/${data?.data?.imagePath}`;
        setSrc(img);

    };
    if(imageId != null) {
            downloadImage();
        setImageId(null);
    }



    return(
        <div>

            <Header style={{backgroundImage: "url(" + src + ")"}}>
                {article &&(
                    <h2>{article.tittle}</h2>
                )}
            </Header>

            <Article>
                {article &&(
                    <ArticleHeaderCont>
                        <ArticleHeader>
                            <p>Created by: Admin</p>
                            <p>{article.createdAt}</p>
                        </ArticleHeader>
                        <p>{article.ingress}</p>
                    </ArticleHeaderCont>
                )}
                {article &&
                article.subtitle.map((sub, index) => (
                    <ArticleMain key={sub.id}>
                        <h3>{sub}</h3>
                            <div >
                                <p>{article.paragraph[index]}</p>
                            </div>
                    </ArticleMain>
                ))
                }
                {isLoggedIn&&isAdmin&&(
                <FormButtonContainer>
                    <BoxButton className="red" onClick={deleteArticle}>Slett  </BoxButton>
                    <BoxButton className="blue" onClick={editBtn} >Rediger </BoxButton>
                </FormButtonContainer>
                )}
            </Article>
        </div>
    )
}

export default ArticlePage;