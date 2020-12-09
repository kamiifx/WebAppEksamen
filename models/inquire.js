import mongoose from 'mongoose';

const { Schema } = mongoose;

const InquireSchema = new Schema(

    {
        from: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const Inquire = mongoose.model('Inquire', InquireSchema);
export default Inquire;