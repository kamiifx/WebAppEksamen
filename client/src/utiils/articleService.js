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

export const create = async (data) => {
    try{
        return await http.post(`${API}`,data)
    }catch (err){
        return err.response;
    }
}

export const slett = async (id) => {
    try{
        return await http.delete(`${API}/${id}`)
    }catch (err){
        return err.response;
    }
}


export const edit = async (id, data) => {
    try{
        return await http.put(`${API}/${id}`,data)
    } catch (err){
        return err.response;
    }
}