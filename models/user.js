import mongoose from 'mongoose';


const { Schema } = mongoose;

const UserSchema = new Schema(
);

const User = mongoose.model('User', UserSchema);

export default User;