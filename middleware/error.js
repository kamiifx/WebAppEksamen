import ErrorHandler from '../utils/errorHandler.js';

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }

    if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        error.message = err.message;

        if (err.code === 'EBADCSRFTOKEN') {
            const message = `Ikke gyldig token`;
            error = new ErrorHandler(message, 403);
        }

        if (err.name === 'CastError') {
            error = new ErrorHandler(`Did not find the resource Invalid ${err.path}`, 404);
        }

        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((value) => value.message);
            error = new ErrorHandler(message, 400);
        }

        if (err.code === 11000) {
            error = new ErrorHandler(`${Object.keys(err.keyValue)} is duplicated`, 400);
        }

        if (err.name === 'JsonWebTokenError') {
            error = new ErrorHandler("Json web token is not valid", 500);
        }

        if (err.name === 'TokenExpiredError') {
            error = new ErrorHandler("Json web token has expired", 500);
        }

        res.status(error.statusCode).json({
            success: false,
            message: error.message || 'Internal Server Error',
        });
    }
};
