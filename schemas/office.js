import Joi from 'joi';

const officeValues = {
    name: Joi.string().min(4).required().messages({
        'string.empty': 'Enter full name',
        'any.required': 'Enter full name!',
        'string.min': 'Minimum 4 character',
    }),
    address: Joi.string().min(4).required().messages({
        'string.empty': 'Enter address',
        'any.required': 'Enter address!',
        'string.min': 'Minimum 4 character',
    }),
    phone: Joi.string().min(8).required().messages({
        'string.empty': 'Enter phone number',
        'any.required': 'Enter phone number!',
        'string.min': 'Minimum 8 character',
    }),
    location:Joi.string().required().messages({
        'string.empty': 'Enter location (city)',
        'any.required': 'Enter location (city)!',
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'Enter email',
        'any.required': 'Enter email!',
        'string.email': 'Email format is wrong',
    }),
    employees:Joi.array().required().messages({
        'any.required': 'Enter Name (employees)!',
    }),

};

export const createOfficeSchema = Joi.object()
    .keys({
        name: Joi.string(),
        ...officeValues,
    })
    .options({ abortEarly: false });
