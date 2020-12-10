import Article from '../models/article.js'

export const getArticleById = async (id) => Article.findById(id);
export const listAllArticles = async () => Article.find();


export const createArticle = async (data) => Article.create(data);
export const updateArticle = async (id, data) => Article.findByIdAndUpdate(id, data);
export const removeArticle = async (id) => {
    const article = await Article.findById(id);
    article.remove();

}