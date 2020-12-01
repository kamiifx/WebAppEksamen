import mongoose from 'mongoose';


const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true,'Enter email' ],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Enter password'],
            minlength: [6, 'Password minimum length of 6 characters']
        },
        role: {
            type: String,
            enum: {
                values: ['user', 'admin'],
                message: 'Need to pick a role',
            },
            default: 'user',
        },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const User = mongoose.model('User', UserSchema);

export default User;