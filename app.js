import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import {join} from 'path'
import cors from 'cors'
import connectDB from './config/connectDB.js';
import web from './route/web.js'
const app = express()
const port = process.env.PORT
const DATA_BASE_URL = process.env.DATA_BASE_URL



app.set("view engine","ejs");

app.use("/hodlinfo",express.static( join(process.cwd(),"public")));
app.use(cors());

app.use(express.urlencoded({extended:false}));
connectDB(DATA_BASE_URL)
app.use(express.json());
app.use("/hodlinfo", web);

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
})