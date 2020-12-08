import mongoose from 'mongoose';

const { Schema } = mongoose;

const InquireSchema = new Schema(

    {
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        data: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const Inquire = mongoose.model('Inquire', InquireSchema);
export default Inquire;