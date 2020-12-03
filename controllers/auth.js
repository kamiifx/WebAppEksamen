import {userService} from "../services/index.js";
import jwt from 'jsonwebtoken';
import { sendToken } from '../utils/jwtToken.js';

export const signUp = (async (req, res, next) => {
    const user = await userService.createUser(req.body);
    sendToken(user, res)
});

export const login = (async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return console.log(email + "dose not exist or password is wrong");
    }

    const user = await userService.getUserByEmail({ email }, true);
    if (!user) {
        return console.log(user + "dose not exist");
    }

    const passwordCheck = await user.comparePassword(password);

    if(!passwordCheck){
        return console.log("Password and email do not match");
    }
    sendToken(user, res)
});

export const logout = (async (req, res, next) => {

    //sendToken(user, res)
});
