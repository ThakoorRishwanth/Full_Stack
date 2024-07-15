const {Router} = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
require('dotenv').config();

const userRouter = Router();

userRouter.post('/register', async(req, res)=>{
    const {email, password, userName} = req.body

    try{
        if(!email || !password || !userName){
            return res
            .status(400)
            .json({message:'this not a valid body, check your fields.'})
        }

        const exists = await user.findOne({email: email});

        if(exists){
            return res
            .status(400)
            .json({message:'this email is already registered, try to login'})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const use = new user({email, userName,password:hashedPassword})
        await use.save()
        return res
        .status(201)
        .json({message:"user gregistered successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email, password} = req.body

    try{
        if(!email || !password){
            return res
            .status(400)
            .json({message:'This is not a valid body, check your fields'})
        }
        const exists = await user.findOne({email: email})

        if(!exists){
            return res
            .status(400)
            .json({message:'This email is not registered. Try to register,'})
        }

        const result = await bcrypt.compare(password, exists.password);

        if(result){
            const token = jwt.sign(
                {email: exists.email, userName: exists.userName},process.env.JWT_SECRET,
            );

            return res.status(200).json({accessToken: token})
        }
        else{
            return res
            .status(400)
            .json({message:"user details are not correct. checkyour details"})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send("Internalserver Error")
    }
})

module.exports = userRouter