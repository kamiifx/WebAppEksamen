import http from "./http";

const API = '/inquires';

export const create = async (data) => {
    try {
        return await http.post(`${API}`, data)
    }catch (err){
        return err.response;
    }
}
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
