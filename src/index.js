import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app}  from './app.js';

dotenv.config({
    path : './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() => {
        console.log(`server is running on port ${process.env.PORT || 8000}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed"+err);
})







// import express from "express";
// const app = express();
//with iffie
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//         app.on("error", (error) => {
//             console.error("Error connecting to MongoDB:", error);
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);   
//     }
// })