import mongoose from "mongoose";
import 'dotenv/config'
let MONGODB_URI = process.env.MONGODB_URI || "";

export default async function connectDB() {
    mongoose
        .connect(
            MONGODB_URI,
            {
                // @ts-ignore
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("connected to db");
        })
        .catch((err) => {
            console.log(err);
        });
}