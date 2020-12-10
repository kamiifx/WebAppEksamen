import { articleService } from '../services/index.js'
import asyncCatch from "../middleware/asyncCatch.js";
import errorHandler from "../utils/errorHandler.js"

export const get = asyncCatch(async (req, res, next) => {
    const article = await articleService.getArticleById(req.params.id);
    if(!article){
        return next(new errorHandler(`can not find article with id ${req.params.id}`),404);
    }
    res.status(201).json(article);
});
export const list = asyncCatch(async (req, res, next) => {
    const articles = await articleService.listAllArticles();
    res.status(200).json(articles);
});


export const create = asyncCatch(async (req, res, next) => {
    const article = await articleService.createArticle(req.body);
    req.body.user = req.user.id;
    res.status(201).json({ success: true, data: article });
});
export const update = asyncCatch(async (req, res, next) => {
    const article = await articleService.updateArticle(req.params.id, req.body);
    if(!article){
        return next(new errorHandler(`can not find article with id ${req.params.id}`),404);
    }
    res.status(200).json({ success: true, data: article });
});
export const remove = asyncCatch(async (req, res, next) => {
    const article = await articleService.removeArticle(req.params.id)

    res.status(204).json({ success: true, data: article });
});