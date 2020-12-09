import http from "./http";

const API = '/inquires';

export const create = async (data) => {
    try {
        return await http.post(`${API}`, data)
    }catch (err){
        return err.response;
    }
}
