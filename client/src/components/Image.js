import React, { useState } from 'react';
import { upload, download } from '../utiils/imageService.js';
import {
    Header,
    Container,
    ArticleBlock,
    ArticleIntro,
    BoxButton,
    FormInput,
    FormInputContainer,
    FormButtonContainer,
    FormTextArea,
    BoxButtonSmall,
    FormContainer
} from '../styled/Styled';

const ImageUpload = ({imageId, setImageIdArticle}) => {
    const [file, setFile] = useState();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [id, setImageId] = useState(null);
    const [src, setSrc] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data } = await upload(file);
        if (!data.success) {
            setError(data.message);
        } else {
            setImageId(data?.data?._id);
            setImageIdArticle(data?.data?._id)
            setSuccess(true);
            setError(null);

        }
    };

    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return window.btoa(binary);
    }

    const downloadImage = async () => {
        const { data } = await download(id);
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

    return (

            <Container>
            {src && <img alt="my" src={src} />}
            {success && (
                <p>
                    Bilde opplastet med{' '}
                    <button type="button" onClick={downloadImage}>
                        {id}
                    </button>
                </p>
            )}
            {error && <p>Noe gikk galt med opplastingen</p>}
            <FormContainer encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                <p >Last opp bilde</p>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(event) => {
                        console.log(event);
                        const imageFile = event.target.files[0];
                        setFile(imageFile);
                    }}
                />
                <button type="submit">Lagre</button>
            </FormContainer>
            </Container>

    );
};

export default ImageUpload;
