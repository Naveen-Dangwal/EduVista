const express=require('express');
const router=express.Router();
const { register,verifyuser } =require( '../controllers/user.js');



router.post("/verify",verifyuser)
router.post("/register",register)

module.exports=router;