import Inquire from "../models/inquire.js";
import Office from "../models/office";

export const createInquire = async (data) => Inquire.create(data);
export const getInquireById = async (id) => Inquire.findById(id);
export const listAllOInquire = async () => Inquire.find();