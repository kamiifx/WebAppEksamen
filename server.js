import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import {connectDatabase} from './config/db.js';
import env from 'dotenv';

import user from './routes/user.js';
import office from './routes/office.js';
import auth from './routes/auth.js';
import article from './routes/article.js';
import image from './routes/image.js';
import errorMiddle from './middleware/error.js'

const app = express();
env.config();
app.use(express.json());

app.use(express.static(`./public`));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({origin:'http://localhost:3000', allowHeaders:['Content-Type','Authorization'], credentials:true,}))
app.use(`${process.env.BASEURL}/offices`, office);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/`, image);app.use(errorMiddle);



connectDatabase();
const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});
