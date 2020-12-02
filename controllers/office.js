import { officeService } from '../services/index'


export const get = (async (req, res, next) => {
    const office = await officeService.getOfficeById(req.params.id);
    res.status(201).json("get test");
});
export const list = (async (req, res, next) => {
    const offices = await officeService.listAllOffices();
    res.status(200).json("list all test");
});


export const create = (async (req, res, next) => {
    const office = await officeService.createOffice(req.body);
    res.status(201).json(office);
});
export const update = (async (req, res, next) => {
    const office = await officeService.updateOffice(req.params.id, req.body);
    res.status(200).json(office);
});
export const remove = (async (req, res, next) => {
    const office = await officeService.removeOffice(req.params.id)
    res.status(204).json({});
});