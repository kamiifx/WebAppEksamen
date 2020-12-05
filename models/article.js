import mongoose from "mongoose";
//import User from "./user";

const { Schema } = mongoose;

const ArticleSchema = new Schema(
    {
        tittle: {
            type: String,
            required: true,
        },
        paragraph: {
            type: Array,
            required: true,
        },

        subtitle:{
            type: Array,
            required: true,
        },
        author: {
            type : Array , "default" : ["Lars Larsen", "Gunn Gundersen", "Simen Simensen"],

            required: true,
        },
        email: {
            type: String,
            //required: true,
        },
    }
);


const Article = mongoose.model('Article', ArticleSchema);
export default Article;