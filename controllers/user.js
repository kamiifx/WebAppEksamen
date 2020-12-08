import {officeService, userService} from '../services/index.js'


export const get = (async (req, res, next) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
});

export const create = (async (req, res, next) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
});
export const list = (async (req, res, next) => {
    const user = await userService.listAllUsers();
    res.status(200).json(user);
});

export const remove = (async (req, res, next) => {
    const user = await userService.removeUser(req.params.id)
    res.status(204).json({});
});

export const currentUser = (async (req, res, next) => {
    const user = await  userService.getUserById(req.user.id)

    if(!user){
        return console.log("can not find user: " + user );
    }
    res.status(200).json(user)
});