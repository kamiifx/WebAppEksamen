import asyncCatch from "../middleware/asyncCatch.js";
import { inquireService} from "../services/index.js";
import {sendMail} from "../utils/email.js";



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