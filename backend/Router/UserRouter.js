const express=require("express")
const {userSignUp,userLogin}=require("../Controller/UserController")

const userRouter=express.Router()


userRouter.post("/signup",userSignUp)

userRouter.post("/login",userLogin)

module.exports=userRouter