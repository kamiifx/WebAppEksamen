import { articleService } from '../services/index.js'

export const get = (async (req, res, next) => {
    const article = await articleService.getArticleById(req.params.id);
    res.status(201).json(article);
});
export const list = (async (req, res, next) => {
    const articles = await articleService.listAllArticles();
    res.status(200).json(articles);
});


export const create = (async (req, res, next) => {
    const article = await articleService.createArticle(req.body);
    req.body.user = req.user.id;
    res.status(201).json(article);
});
export const update = (async (req, res, next) => {
    const article = await articleService.updateArticle(req.params.id, req.body);
    res.status(200).json(article);
});
export const remove = (async (req, res, next) => {
    const article = await articleService.removeArticle(req.params.id)
    res.status(204).json({});
});