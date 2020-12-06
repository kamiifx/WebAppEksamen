import User from '../models/user.js';


export const getUserById = async (id) => User.findById(id);
export const listAllUsers = async () => User.find();
export const createUser = async (data) => User.create(data);
export const removeUser = async (id) => User.remove(id);
export const getUserByEmail = async (email) => {
    return User.findOne(email);

}