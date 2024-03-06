import React from 'react'
import { useUser } from './useUser'
import { useTodoList } from './useTodoList';
const useLogout = () => {
    const {dispatch}=useUser();
    const {dispatch:todolistdispatch}=useTodoList()
    const logout=()=>{
        localStorage.removeItem("user")
        dispatch({type:"LOGOUT"})
        todolistdispatch({type:"CLEAR_ALL_TASKS"})
    }
    return logout;
}

export default useLogout