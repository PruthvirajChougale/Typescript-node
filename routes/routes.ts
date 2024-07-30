import express ,{Router} from 'express';
import {Request,Response} from 'express'
const router = express.Router();
import Birthday from './../models/birthday.js';

export const getuser=async ( req:Request,res:Response)=>{
    try{
        const name=req.query.name as string;
        let response = await Birthday.findOne({name});
    if(response){
        res.status(200).json(response);
    }
    else{
        res.status(500).json({error:"couldn't fetch"})
    }
    }
    catch(err){
        console.log(err);
        res.status(404).json({error: "internal server error"})
    }
    
};



export const adduser= async (req:Request,res:Response)=>{
    try{

        
        const { name , date} = req.body;
        const newbirthday = new Birthday({ name:name, date:date});

        // const response=await newbirthday.save();
        await newbirthday.save();
        console.log('data saved');
        res.status(200).json(newbirthday);
    }
    catch(err){
        res.status(404).json({error: "internal server error"});
    }
};


export const updateuser = async (req:Request,res:Response)=>{
    try{
        const namee=req.params.name;
        console.log(namee);
        const updateMe = req.body;
        console.log(updateMe);
    const response =await Birthday.findOneAndUpdate({name:namee},updateMe,
        {
        new: true,
        runValidators: true,
    });
    console.log(response);

    if(!response){
        res.status(500);
    }
        res.status(200).json(response);
       
    }
    catch(err){
        res.status(404).json({error: "internal server error"});
    }
    
};

export const deleteuser= async (req:Request,res:Response)=>{
    try{
        const deleteDate = await Birthday.findOneAndDelete({name:req.params.name});
        if(deleteDate){
            res.status(200);
        }
        else{
            res.status(500);
        }
    }
    catch(err){
        res.status(404).json({error: "internal server error"});
    }
};