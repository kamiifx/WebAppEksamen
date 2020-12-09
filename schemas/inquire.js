import Joi from 'joi';

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
