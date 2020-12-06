import mongoose from "mongoose";
//import validator from "validator";


const { Schema } = mongoose;

const OfficeSchema = new Schema(
    {
        name: {
            type: String,
            minlength: [4, 'Minimum four characters'],
            required: true,
        },
        address: {
            type: String,
            minlength: [4, 'Minimum four characters'],
            required: true,
        },

        phone:{
            type: String,
            minlength: [8, 'Minimum four characters'],
            required: true,
        },
        location: {
            type: String,

            required: true,
        },
        email: {
            type: String,
            required: true,
            //validate: [validator.isEmail("Email not valid")]
        },
    }
);


const Office = mongoose.model('Office', OfficeSchema);
export default Office;