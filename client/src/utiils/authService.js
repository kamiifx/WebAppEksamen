import http from "./http";

const LOGIN = '/login';
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