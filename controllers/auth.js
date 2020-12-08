import {userService} from "../services/index.js";
import { sendToken } from '../utils/jwtToken.js';
import asyncCatch from "../middleware/asyncCatch.js";
import errorHandler from "../utils/errorHandler.js";
import { sendMail } from '../utils/email.js';

export const signUp = asyncCatch(async (req, res, next) => {
    const user = await userService.createUser(req.body);
    try {
        await sendMail({
            email: user.email,
            subject: 'Velkommen som bruker',
            message: `Du har fått en ny brukerkonto med epost: ${user.email}`,
        });
    } catch (error) {
        console.log(error);
    }
    sendToken(user, res);
    console.log(user + " is now signed up!");

});

export const login = asyncCatch(async (req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return next(new errorHandler('Enter email and password', 400));

    }

    const user = await userService.getUserByEmail({ email }, true);
    if (!user) {
        return next(new errorHandler('user dose not exist"', 400));

    }

    const passwordCheck = await user.comparePassword(password);

    if(!passwordCheck){
        return next(new errorHandler('Password and email do not match"', 400));

    }
    console.log(email + " is now logged in!");

    sendToken(user, res);
});

export const logout = asyncCatch(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: 'logged out',
    });
});
