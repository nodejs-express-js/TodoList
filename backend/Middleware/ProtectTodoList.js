const jwt=require("jsonwebtoken")
require("dotenv").config()
const todoListUserModel=require("../Model/UserModel") 
const protectTodoListapi=async (req,res,next)=>{
    
    const {authorization}=req.headers;

    if(!authorization || authorization===undefined)
    {
        res.status(400).json({msg:"token needed for accessing the data"})
        return;
    }
    try{
        const Bearer=authorization.split(" ")[0]
        if(Bearer!=="Bearer"){
            res.status(400).json({msg:"need a *Bearer* token to access data"})
            return;
        }
        const token=authorization.split(" ")[1]
        const {_id}=jwt.verify(token,process.env.JWTKEY)
        req.user=await todoListUserModel.findOne({_id:_id})
    }
    catch(error){
        
        res.status(400).json({msg:"not a valid token please login again"})
    }
    next();
}
module.exports=protectTodoListapi;