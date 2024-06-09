import exp from "constants";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=826&t=st=1717938125~exp=1717938725~hmac=9fbc86614fc841068f5fc8eeda7dc957e00018693fe8707e260ad9a2b78cb58d",
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;