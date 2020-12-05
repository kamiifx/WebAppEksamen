import http from "./http";

const API = '/articles';

export const list = async () => {
    try {
        return await http.get(`${API}`)
    }catch (err){
        return err.response;
    }
}