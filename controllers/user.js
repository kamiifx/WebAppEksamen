import {officeService, userService} from '../services/index.js'
import asyncCatch from "../middleware/asyncCatch.js";
import errorHandler from "../utils/errorHandler.js";


export const get = asyncCatch(async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    if(!user){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(200).json(user);
});

export const create = asyncCatch(async (req, res, next) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
});
export const list = asyncCatch(async (req, res, next) => {
    const user = await userService.listAllUsers();
    res.status(200).json(user);
});

export const remove = asyncCatch(async (req, res, next) => {
    const user = await userService.removeUser(req.params.id);
    if(!user){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(204).json({});
});

export const currentUser = asyncCatch(async (req, res, next) => {
    const user = await  userService.getUserById(req.user.id);
    if(!user){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(200).json(user)
});