import { userService } from '../services/index.js';
import jwt from 'jsonwebtoken';
import errorHandler from "../utils/errorHandler.js";

export const authentication = (async  (req, res, next) => {
    let token;

    if(req.cookies?.token){
        token = req.cookies.token;
    }
    if(!token){
        return next(new errorHandler('token dose not exist', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);

    if(!user){
        return next(new errorHandler('user dose not exist', 404));
    }
    req.user = user;
    next();

});

export const authorization = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return next(new errorHandler('You do not have access', 404));
    }
    next();
};