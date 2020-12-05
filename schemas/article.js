import Joi from 'joi';

const articleValues = {
    tittle: Joi.string().required().messages({
        'string.empty': 'Enter tittle',
        'any.required': 'Enter tittle!',

    }),
    paragraph: Joi.array().required().messages({
        'string.empty': 'Enter paragraph',
        'any.required': 'Enter paragraph',
    }),
    subtitle: Joi.array().messages({
        'string.empty': 'Enter paragraph',
        'any.required': 'Enter paragraph',
    })

};

export const createArticleSchema = Joi.object()
    .keys({
        name: Joi.string(),
        ...articleValues,
    })
    .options({ abortEarly: false });
