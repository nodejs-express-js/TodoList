const express=require("express")
const todoListRouter=express.Router()
const {GetTodoList,PostTodoList,DeleteTodoList,PatchTodoList}=require('../Controller/TodoListController')


//get all tasks
todoListRouter.get("/",GetTodoList)

//post a task
todoListRouter.post("/",PostTodoList)

//delete a task
todoListRouter.delete("/:id",DeleteTodoList)

//modify a task
todoListRouter.patch("/:id",PatchTodoList)


module.exports=todoListRouter