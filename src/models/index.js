import { Mongoose } from "mongoose";

import User from './user';
import Message from './message';

const connectDb = () => {
    return Mongoose.connect('mongodb://localhost:27017/mern');
};

const models = {
    User,
    Message
};

export { connectDb };
export default models;