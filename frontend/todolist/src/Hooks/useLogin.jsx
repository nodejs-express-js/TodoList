import React, { useState } from 'react'
import { useUser } from './useUser'
export const useLogin = () => {
    const {dispatch}=useUser()
  const [error,setError]=useState(null)
  const [isloading,setIsLoading]=useState("")
  
  const login=async(email,password)=>{
    setError(null)
    setIsLoading(true)
    const response=await fetch("/user/login",{
        "method":"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email:email,password:password})
    })
    const user=await response.json()
    if(response.ok){
        dispatch({type:"LOGIN",payload:user})
        localStorage.setItem("user",JSON.stringify(user))
    }
    else{
        setError(user.error)
    }
    setIsLoading(false)
  }


  return {error,isloading,login}
}
