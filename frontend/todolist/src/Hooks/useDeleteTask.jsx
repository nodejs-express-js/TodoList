import React, { useState } from 'react'
import {useTodoList} from './useTodoList'
const useDeleteTask = () => {
    const [error,setError]=useState(null);
    const [isloading,setIsLoading]=useState(false);
    const {dispatch}=useTodoList();
    const deleteTask=async(_id)=>{
        setError(null)
        setIsLoading(true)
        const response=await fetch("/todolist/"+_id,{
            method:"DELETE"
        })
        const deletetask=await response.json()
        if(response.ok){
            dispatch({type:"DELETE_TASK",payload:_id})
        }
        else{
            setError(deletetask.error)
        }
        setIsLoading(false)

    }
  
    return {error,isloading,deleteTask}
}

export default useDeleteTask