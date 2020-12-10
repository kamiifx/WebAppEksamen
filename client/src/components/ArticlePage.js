import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {get} from '../utiils/articleService'
import {Header,FormButtonContainer,BoxButton} from "../styled/Styled";
import {download} from "../utiils/imageService";
import * as url from "url";

const Article = styled.article`
  display: flex;
  justify-content: center;
  flex-direction:column;
  width: 26%;
  margin-left: 36%;
  font-family: 'Roboto',sans-serif;
`;

const ArticleHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 55%;
  margin-bottom: -10px;
  p{
  font-size: 13px;
  font-weight: 500;
  color:${({ theme }) => theme.colors.graygrayer} ;
  }
`;
const ArticleHeaderCont = styled.div`
margin-bottom: 39px;
`
const ArticleMain = styled.div`
  
  h3{
  font-family: 'Roboto',sans-serif;
  font-weight: 500;
  font-size: 22px;
  color:${({ theme }) => theme.colors.grayer} ;
  }
  p{
  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  color:${({ theme }) => theme.colors.graygrayer} ;
  font-weight: 400;
  }
`

function ArticlePage(){
    const [article, setArticle] = useState(null);
    const { id } = useParams();
    const [imageId, setImageId] = useState(null);
    const [src, setSrc] = useState(null);


    useEffect(async () => {
        if(id){
            const {data} = await get(id)
            setArticle(data)
            setImageId(data.imageId);
        }


    },[id])

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
                article.subtitle.map((articles) => (
                    <ArticleMain key={articles.id}>
                        <h3>{articles}</h3>
                        {article &&
                        article.paragraph.map((articles) => (
                            <div key={articles.id}>
                                <p>{articles}</p>
                            </div>
                        ))}
                    </ArticleMain>
                ))
                }
                <FormButtonContainer>
                    <BoxButton className="red">Slett</BoxButton>
                    <BoxButton className="blue">Rediger</BoxButton>
                </FormButtonContainer>
            </Article>
        </div>
    )
}

export default ArticlePage;