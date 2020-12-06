import http from "./http";

const API = '/articles';

export const list = async () => {
    try {
        return await http.get(`${API}`)
    }catch (err){
        return err.response;
    }
}

export const get = async (id) => {
    try{
        return await http.get(`${API}/${id}`)
    }catch (err){
        return err.response;
    }
}