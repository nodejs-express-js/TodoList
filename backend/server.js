const express=require("express")
const app=express()
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const todoListRouter=require("./Router/TodoListRouter")

app.use(cors())
app.use(express.json())
app.use("/todolist",todoListRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port ",process.env.PORT)
    })
})


