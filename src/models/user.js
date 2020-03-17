import { Mongoose } from "mongoose";

//database schema = boilerplate for a certain type of information
const userSchema = new Mongoose.Schema({
    userName: {
        type: String,
        unique: true
    }
});

userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
        username: login
    });

    if (!user) {
        user = await this.findOne({ email: login });
    }

    return user;
}

const User = Mongoose.model('User', userSchema);

export default User;



