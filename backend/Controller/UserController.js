const todoListUserModel=require("../Model/UserModel")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const createToken=async(_id)=>{
    const token=jwt.sign({_id:_id},process.env.JWTKEY,{ expiresIn: '3d' })
    return token;
}


const userSignUp=async(req,res)=>{
try{
const user=await todoListUserModel.signup(req.body)
const token=await createToken(user._id)
res.status(200).json({email:user.email,token})
}
catch(error){
    res.status(400).json({error:error.message})
}
}



const userLogin=async(req,res)=>{
    try{
        const user=await todoListUserModel.login({...req.body})
        const token=await createToken(user._id)
        res.status(200).json({email:user.email,token})
        }
        catch(error){
            res.status(400).json({error:error.message})
        }
}
module.exports={userSignUp,userLogin}
