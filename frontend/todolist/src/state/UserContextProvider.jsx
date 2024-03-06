import React, { createContext,useEffect,useReducer } from 'react'

const userReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return {user:null};
        default:
            return state;
    }
}

export const userContext=createContext()

const UserContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(userReducer,{user:null})
    useEffect(()=>{
        const item=localStorage.getItem("user")
        if(item){
            dispatch({type:"LOGIN",payload:JSON.parse(item)})
        }
    },[])
 return (
 <userContext.Provider value={{state,dispatch}}>
    {children}
 </userContext.Provider>
 )
}

export default UserContextProvider;