import mongoose from "mongoose";

const { Schema } = mongoose;

const OfficeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    }
);

export default mongoose.model('Office', OfficeSchema);