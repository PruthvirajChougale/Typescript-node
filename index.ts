import express from 'express';
import mongoose from 'mongoose';
import Birthday from './models/birthday.js';
import router from './execute/execute.js';
import bodyparser from 'body-parser';
import cors from 'cors';


const app=express();
const port =4000;
app.use(bodyparser.json());
app.use(cors());

let conn=mongoose.connect('mongodb://localhost:27017/birthday');


app.use('/',router)


app.listen(port,()=>{
    console.log('you are listening to port '+ port);
})