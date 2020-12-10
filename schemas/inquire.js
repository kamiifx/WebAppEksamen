import Joi from 'joi';
import {limits} from "argon2";

const inquireValues = {
    from: Joi.string().email().required().messages({
        'string.empty': 'Enter your email ',
        'any.required': 'Enter your email !',

    }),
    name: Joi.string().min(2).required().messages({
        'string.empty': 'Enter name  ',
        'any.required': 'Enter name!',
        'string.min': 'Minimum 2 character',

    }),
    subject: Joi.string().min(1).required().messages({
        'string.empty': 'Enter subject',
        'any.required': 'Enter subject!',
        'string.min': 'Minimum 1 character',
    }),
    message: Joi.string().min(1).required().messages({
        'string.empty': 'Enter massage',
        'any.required': 'Enter massage!',
        'string.min': 'Minimum 1 character',
    }),



};

export const createInquireSchema = Joi.object()
    .keys({
        ...inquireValues,
    })
    .options({ abortEarly: false });
