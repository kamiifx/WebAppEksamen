import Joi from 'joi';

const articleValues = {
    tittle: Joi.string().min(2).required().messages({
        'string.empty': 'Enter tittle',
        'any.required': 'Enter tittle!',
        'string.min': 'Minimum 2 character',

    }),
    ingress: Joi.string().required().messages({
        'string.empty': 'Enter ingress',
        'any.required': 'Enter ingress!',
    }),
    paragraph: Joi.array().items(Joi.string().min(10)).required().messages({
        'string.empty': 'Enter paragraph',
        'any.required': 'Enter paragraph',
        'string.min': 'Minimum 10 character',
    }),
    subtitle: Joi.array().items(Joi.string().min(2)).required().messages({
        'string.empty': 'Enter subtitle',
        'any.required': 'Enter subtitle',
        'string.min': 'Minimum 2 character',
    }),
    category: Joi.string().required().messages({
        'string.empty': 'Enter category',
        'any.required': 'Enter category!',
    }),
    secret: Joi.boolean().messages({

    }),
    imageId: Joi.string().messages({

    }),

};

export const createArticleSchema = Joi.object()
    .keys({
        name: Joi.string(),
        ...articleValues,
    })
    .options({ abortEarly: false });
