import Joi from 'joi';

const userValues = {
    email: Joi.string().email().required().messages({
        'string.empty': 'Enter email',
        'any.required': 'Enter email!',
        'string.email': 'Email format is wrong',

    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'Enter password',
        'any.required': 'Enter password',
        'string.min': 'Minimum 6 character',

    })

};
const signUpValues = {
    name: Joi.string().required().messages({
        'string.empty': 'Enter full name',
        'any.required': 'Enter full name!',
    })
}

export const signUpSchema = Joi.object()
    .keys({
        name: Joi.string(),
        ...userValues,...signUpValues,
    })
    .options({ abortEarly: false });

export const loginSchema = Joi.object()
    .keys({
        ...userValues,
    })
    .options({ abortEarly: false });