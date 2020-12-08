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
        ingress:{
            type:String,
            required: true,
        },
        paragraph: {
            type: Array(String),

            required: true,
        },
        subtitle:{
            type: Array(String),
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        secret:{
            type: Boolean,
            required: true,
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Article = mongoose.model('Article', ArticleSchema);
export default Article;