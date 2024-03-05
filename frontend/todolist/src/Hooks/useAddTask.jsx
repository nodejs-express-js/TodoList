import React, { useState } from 'react'
import { useTodoList } from './useTodoList'

const useAddTask = () => {
  const [error,setError]=useState(null)
  const [isloading,setIsLoading]=useState(false)
  const {state,dispatch}=useTodoList()

  const addTask=async(task,time,subtask)=>{
    setIsLoading(true)
    setError(null)
    console.log(task,time,subtask)
    if(task==="" || time===""){
        setError("need to fill both task and time fields")
        setIsLoading(false)
        return {error,isloading,addTask}
    }
   
  
    const response=await fetch("/todolist",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "task":task,
            "time":time,
            "subtask":subtask
        }),
    })
    const newtask=await response.json()
    
    if(response.ok){
        dispatch({type:"ADD_TASK",payload:newtask})
    }
    else{
        setError(newtask.error)
    }
    setIsLoading(false)
  }


  return {error,isloading,addTask}
}

export default useAddTask
