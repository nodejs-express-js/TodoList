import React,{useContext} from 'react'
import {TodoListContext} from '../state/TodoListContextProvider'

export const useTodoList = () => {
    const context=useContext(TodoListContext)
 
    if(!context){
        throw Error("please use context inside the context provider")
    }

    return context;
}
