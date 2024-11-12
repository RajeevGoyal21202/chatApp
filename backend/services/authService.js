const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { userModel } = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helper/authHelper");

const registerService = async(payload)=>{
    try{
        const {name,email,phone,role,password}=payload.body;
        console.log(name,email,phone,role,password) 

        if(!name){
          throw Object.assign(new Error(),{
            name: "BAD_REQUEST",
            message: "name is required",
          }) 
        }
        if(!email){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "email is required",
              }) 
        }
        if(!phone){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "phone is required",
              }) 
        }
        if(!role){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "role is required",
              }) 
        }
    
        if(!password){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "password is required",
              }) 
        }
        const user =  await userModel.findOne({email});
        if(user){
            throw Object.assign(new Error(),{
                name: "CONFLICT",
                message: "User Already exists",
              }) 
        }
        const hashedPassword = await hashPassword(password);
        const newUser = await userModel.create({name:name,email:email,role:role,phone:phone,password:hashedPassword});
        return {newUser};
    }
    catch(error){
        console.log(error);
        throw error;
    }
  
}
const signInService = async(payload)=>{
    try{
        const {email,password}= payload.body;
        console.log(email,password);
        if(!email){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "email is required",
              }) 
        }
        if(!password){
            throw Object.assign(new Error(),{
                name: "BAD_REQUEST",
                message: "password is required",
              }) 
        }
        const user =  await userModel.findOne({email});
        if(!user){
            throw Object.assign(new Error(),{
                name: "CONFLICT",
                message: "User not existed in system",
              }) 
        }
        const match = await comparePassword(password, user.password);

        if (!match) {
          throw Object.assign(new Error(), {
            name: "UNAUTHORIZED",
            message: `Password is not correct`,
          });
        }
        const token = JWT.sign({ _id: user._id }, "CHATAPP", {
            expiresIn: "7d",
          });
          return { user, token };
    }
    catch(error){
        console.log(error);
        throw error;
    }
} 


module.exports.authService ={
    registerService,signInService
}