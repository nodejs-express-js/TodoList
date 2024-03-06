import React, { useContext } from 'react'
import {userContext} from '../state/UserContextProvider'
export const useUser = () => {
  const context=useContext(userContext)
    if(!context){
        throw Error("please use context inside the usercontextprovider")
    }
    return context
}
