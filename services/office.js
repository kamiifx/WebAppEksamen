import Office from '../model/office.js'

export const getOfficeById = async (id) => Office.findById();
export const listAllOffices = async () => Office.find();


export const createOffice = async (data) => Office.create();
export const updateOffice = async (id, data) => Office.findByIdAndUpdate(id, data);
export const removeOffice = async (id) => Office.findById(id);