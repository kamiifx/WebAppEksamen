import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
//import validator from "validator";

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: [true,'Enter email' ],
            unique: true,
            //validate: [validator.isEmail("Email not valid")]
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
        name: {
            type: String,
            required: [true, 'Enter full name'],
        }
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
// auth (forelesning)
UserSchema.pre('save', async function (next) {
    this.password = await argon2.hash(this.password);
});

UserSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME,
    });
};

UserSchema.methods.comparePassword = async function (password) {
    console.log(password);
    return argon2.verify(this.password, password);
};
const User = mongoose.model('User', UserSchema);

export default User;