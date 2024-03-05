const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")
const userSchema=mongoose.Schema(
    {
        email:{
            type:"string",
            required:true,
            unique:true
        },
        password:{
            type:"string",
            required:true,
        }
    }
)


userSchema.statics.signup=async function({email,password}){

if(!email || !password || email==="" || password===""){
    throw Error("email and password are necessary  fields")
}
if(!validator.isEmail(email)){
throw Error("please enter a valid email")
}
if(!validator.isStrongPassword(password)){
    throw Error("please enter a strong password minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,")
}
const prevemail=await this.findOne({email:email})
if(!prevemail){
const salt=await bcrypt.genSalt(10)
const hashpassword=await bcrypt.hash(password,salt)
const user=await this.create({email:email,password:hashpassword})
return user;
}
else{
    throw Error("email already exists")
}
}



userSchema.statics.login=async function({email,password}){
    if(email==="" || password===""){
        throw Error("email and password are necessary  fields")
    }
    if(!validator.isEmail(email)){
        throw Error("please enter a valid email")
    }
    const user=await this.findOne({email:email})
    if(user){
        const validpassword=await bcrypt.compare(password,user.password);
        if(validpassword){
            return user;
        }
        else{
            throw Error("please enter a correct password")
        }
    }
    else{
        throw Error("please enter a valid email")
    }
}


module.exports=mongoose.model("todoListUserModel",userSchema)