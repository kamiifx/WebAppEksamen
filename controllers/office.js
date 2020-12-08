import { officeService } from '../services/index.js';
import asyncCatch from "../middleware/asyncCatch.js";
import errorHandler from "../utils/errorHandler.js"

export const get = asyncCatch(async (req, res, next) => {
    const office = await officeService.getOfficeById(req.params.id);
    if(!office){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(201).json(office);
});
export const list = asyncCatch(async (req, res, next) => {
    const offices = await officeService.listAllOffices();
    res.status(200).json(offices);
});


export const create = asyncCatch(async (req, res, next) => {
    const office = await officeService.createOffice(req.body);
    req.body.user = req.user.id;
    res.status(201).json(office);
});
export const update = asyncCatch(async (req, res, next) => {
    const office = await officeService.updateOffice(req.params.id, req.body);
    if(!office){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(200).json(office);
});
export const remove = asyncCatch(async (req, res, next) => {
    const office = await officeService.removeOffice(req.params.id)
    if(!office){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(204).json({});
});