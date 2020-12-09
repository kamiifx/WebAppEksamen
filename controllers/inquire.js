import asyncCatch from "../middleware/asyncCatch.js";
import {inquireService, officeService} from "../services/index.js";
import {sendMail} from "../utils/email.js";
import errorHandler from "../utils/errorHandler";



export const create = asyncCatch(async (req, res, next) => {
    const inquire = await inquireService.createInquire(req.body);

    try {
        await sendMail({
            from: req.body.from,
            email:  "admin@damin.com",
            subject: 'Henvendelse',
            message: req.body.message,
        });
    } catch (error) {
        console.log(error);
    }
    res.status(201).json(inquire);
});

export const get = asyncCatch(async (req, res, next) => {
    const office = await inquireService.getInquireById(req.params.id);
    if(!office){
        return next(new errorHandler(`Can not find office ${req.params.id}`, 404));
    }
    res.status(201).json(office);
});
export const list = asyncCatch(async (req, res, next) => {
    const offices = await inquireService.listAllOInquire();
    res.status(200).json(offices);
});