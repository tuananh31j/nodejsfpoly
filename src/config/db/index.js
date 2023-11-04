import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fpoly_highland_dev')
        console.log("Connected!");
    } catch (error) {
        console.log(error);
    }
}

export default { connect };