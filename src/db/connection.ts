import mongoose from "mongoose";
import 'dotenv/config'

// use localDBURL incase you are not using the docker 
// let localDBURL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1"

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