// require('dotenv').config({path:"./env"})
// src/index.js

// import dotenv from "dotenv";
import connectDB from "./db/index.js"; //  Correct ESM import
import express from "express"
// Load environment variables
// dotenv.config({ path: "./.env" }); //  Make sure this file exists

const app=express();
// Connect to DB
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 6000,()=>{
        console.log(`server is runing at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Mongodb connections failed:",error)
}
)









/*
One way we can define this or connect with db using ifi functions
const app=express()
(async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:",error )
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listeing on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR:",error)
        throw err
    }
})()*/