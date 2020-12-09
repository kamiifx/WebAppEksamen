import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import {connectDatabase} from './config/db.js';
import env from 'dotenv';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import user from './routes/user.js';
import office from './routes/office.js';
import auth from './routes/auth.js';
import article from './routes/article.js';
import image from './routes/image.js';
import inquire from './routes/inquire.js';
import errorMiddle from './middleware/error.js'

const app = express();
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
});

app.use(limiter);

env.config();
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use(morgan('dev'));
app.use(cookieParser());

app.use(cors({origin:'http://localhost:3000', allowHeaders:['Content-Type','Authorization'], credentials:true,}))
app.use(`${process.env.BASEURL}/offices`, office);
app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/inquires`, inquire);
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
