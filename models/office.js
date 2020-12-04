import mongoose from "mongoose";
//import User from "./user";

const { Schema } = mongoose;

const OfficeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            //required: true,
        },

        phone:{
            type: String,
            //required: true,
        },
        location: {
            type: String,
            //required: true,
        },
        email: {
            type: String,
            //required: true,
        },
    }
);


const Office = mongoose.model('Office', OfficeSchema);
export default Office;