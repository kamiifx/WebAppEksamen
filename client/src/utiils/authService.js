import http from "./http";

const API = '/users';

export const create = async (userdata) => {
    try{
        return await http.post(`${API}`,userdata)
    }catch (err){
        return err.response.data;
    }
};

export const login = async (userdata) => {
    try{
        return await http.post(`${API}`,{...userdata});
    }catch (err){
        return err.response;
    }
};