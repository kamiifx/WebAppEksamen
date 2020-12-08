import mongoose from "mongoose";
//import User from "./user";
const { Schema } = mongoose;
const ArticleSchema = new Schema(
    {
        tittle: {
            type: String,
            minlength: [2, 'Minimum two characters'],
            required: true,
        },
        paragraph: {
            type: Array(String),
            minlength: [10, 'Minimum 10 characters'],
            required: true,
        },
        subtitle:{
            type: Array(String),
            minlength: [2, 'Minimum two characters'],
            required: true,
        },
        email: {
            type: String,
            //required: true,
        },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Article = mongoose.model('Article', ArticleSchema);
export default Article;