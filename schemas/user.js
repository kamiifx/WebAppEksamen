import Joi from 'joi';
const complexityOptions = {
    min: 3,
    numeric: 1,
};
const userValues = {
    email: Joi.string().email().required().messages({
        'string.empty': 'Enter email',
        'any.required': 'Enter email!',
        'string.email': 'Email format is wrong',

    }),
    password: Joi.string().required().messages({
        'string.empty': 'Enter password',
        'any.required': 'Enter password',


    })
};
const signUpValues = {
    name: Joi.string().regex(/^[ a-zA-Z]+$/, 'correct pattern, must only contain letters in the').required().messages({
        'string.empty': 'Enter full name',
        'any.required': 'Enter full name!',

    }),
    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/, 'correct pattern, must only at least contain 1 number and minimum 3 characters in the' ).required().messages({
        'string.empty': 'Enter password',
        'any.required': 'Enter password',
        'string.min': 'Minimum 6 character',
        'regex': 'must contain at least 1 numeric value'

    })
}

export const signUpSchema = Joi.object()
    .keys({
        ...userValues,...signUpValues,
    })
    .options({ abortEarly: false });

export const loginSchema = Joi.object()
    .keys({
        ...userValues,
    })
    .options({ abortEarly: false });