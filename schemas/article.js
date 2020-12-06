import Joi from 'joi';

const articleValues = {
    tittle: Joi.string().min(2).required().messages({
        'string.empty': 'Enter tittle',
        'any.required': 'Enter tittle!',
        'string.min': 'Minimum 2 character',

    }),
    paragraph: Joi.array().items(Joi.string().min(10)).required().messages({
        'string.empty': 'Enter paragraph',
        'any.required': 'Enter paragraph',
        'string.min': 'Minimum 10 character',
    }),
    subtitle: Joi.array().items(Joi.string().min(2)).required().messages({
        'string.empty': 'Enter paragraph',
        'any.required': 'Enter paragraph',
        'string.min': 'Minimum 2 character',
    })

};

export const createArticleSchema = Joi.object()
    .keys({
        name: Joi.string(),
        ...articleValues,
    })
    .options({ abortEarly: false });
