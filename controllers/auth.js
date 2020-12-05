import {userService} from "../services/index.js";
import { sendToken } from '../utils/jwtToken.js';

export const signUp = (async (req, res, next) => {
    const user = await userService.createUser(req.body);
    sendToken(user, res);
    console.log(user + " is now signed up!");

});

export const login = (async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return console.log(email + "dose not exist or password is wrong");
    }

    const user = await userService.getUserByEmail({ email }, true);
    if (!user) {
        res.status(400).json("user dose not exist")
        return console.log( "user dose not exist");
    }

    const passwordCheck = await user.comparePassword(password);

    if(!passwordCheck){
        return console.log("Password and email do not match");
    }
    console.log(user + " is now logged in!");
    sendToken(user, res);
});

export const logout = (async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: 'logged out',
    });
});