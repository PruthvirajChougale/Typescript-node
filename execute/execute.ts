import mongoose from 'mongoose';
import express ,{Request,Response} from 'express';
import {Router} from 'express';
import {getuser,adduser,updateuser,deleteuser} from '../routes/routes';
const router:Router=Router();


router.get('/:name',getuser);
router.post('/',adduser);
router.put('/update/:name',updateuser);
router.delete('/delete/:name',deleteuser);


export default router;

