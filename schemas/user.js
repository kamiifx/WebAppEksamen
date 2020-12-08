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
    password: Joi.string().regex(new RegExp('^[a-z&&A-Z&&0-9]{3,30}$')).required().messages({
        'string.empty': 'Enter password',
        'any.required': 'Enter password',
        'string.min': 'Minimum 6 character',
        'regex': 'must contain at least 1 numeric value'

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