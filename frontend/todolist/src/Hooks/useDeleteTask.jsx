import React, { useState } from 'react'
import {useTodoList} from './useTodoList'
import { useUser } from './useUser';
const useDeleteTask = () => {
    const [error,setError]=useState(null);
    const [isloading,setIsLoading]=useState(false);
    const {dispatch}=useTodoList();
    const {state}=useUser();
    const deleteTask=async(_id)=>{
        setError(null)
        setIsLoading(true)
        const response=await fetch("/todolist/"+_id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${state.user.token}`
            }
        })
        const deletetask=await response.json()
        if(response.ok){
            dispatch({type:"DELETE_TASK",payload:_id})
        }
        else{
            setError(deletetask.msg)
        }
        setIsLoading(false)

    }
  
    return {error,isloading,deleteTask}
}

export default useDeleteTask