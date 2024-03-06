import React, { createContext,useReducer } from 'react'

const userReducer=(state,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export const userContext=createContext()

const UserContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(userReducer,{user:null})

 return (
 <userContext.Provider value={{state,dispatch}}>
    {children}
 </userContext.Provider>
 )
}

export default UserContextProvider;