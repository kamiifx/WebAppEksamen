import http from "./http";

const LOGIN = '/login';
const SIGNUP = '/signup';
const LOGOUT = '/logout';
const API = '/users';
export const create = async (userdata) => {
    try{
        return await http.post(`${SIGNUP}`,userdata)
    }catch (err){
        return err.response.data;
    }
};

export const login = async (userdata) => {
    try{
        return await http.post(`${LOGIN}`,{...userdata});
    }catch (err){
        return err.response;
    }
};

export const getCurrent = async () => {
    try {
        return await http.get('/me')
    }catch (err){
        return err.response;
    }
}

export const logout = async () => {
    try{
        return await http.post(`${LOGOUT}`)
    }catch (err){
        return err.response;
    }
}