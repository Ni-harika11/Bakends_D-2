import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { DB_NAME } from "../constants.js"
dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        console.log(`MongoDB connected !! DB HOST :${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log("Mongodb connections error:", error);
        process.exit(1)
    }
}

export default connectDB;