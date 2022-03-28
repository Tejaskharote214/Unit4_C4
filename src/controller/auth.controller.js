

const User = require("../models/user.model");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user)=>{
    return jwt.sign({user}, process.env.key);
}

const register = async(req,res)=>{
    try {
        let user  =await User.findOne({email:req.body.email});

        if(user){
            res.status(400).send({message:"Email already exist"});
        }
        user = await User.create(req,body);
        const token = newToken(user)
        return res.status(200).send({user,token});
        
    } catch (err){
        res.status(400).send({message:"Email already exist"});
    }
}

const login = async (req,res)=>{
    try {
        let user  =await User.findOne({email:req.body.email});

        if(user){
            res.status(400).send({message:"wrong Email or Password"});
        }
        const match = user.checkPassword(req.body.password);
        
        if(!match){
            res.status(400).send({message:"wrong Email or Password"});
        }

        const token = newToken(user)
        return res.status(200).send({user,token});
        
    } catch (err){
        res.status(400).send({message:"Email already exist"});
    }
}

module.exports = [register,login];