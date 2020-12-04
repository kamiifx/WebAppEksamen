import { userService } from '../services/index.js';
import jwt from 'jsonwebtoken';

export const authentication = (async  (req, res, next) => {
    let token;

    if(req.cookies != null){
        token = req.cookies.token;
    }
    if(!token){
        return console.log("token dose not exist");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userService.getUserById(decoded.id);

    if(!user){
        return console.log("user dose not exist");
    }
    req.user = user;
    next();

});

export const authorization = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return console.log("You do not have access");
    }
    next();
};