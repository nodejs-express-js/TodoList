import { createContext, useEffect, useReducer } from "react"

const todoListReducer=(state,action)=>{
  switch(action.type){
    case "ADD_TASK":
      return [...state,action.payload]
    case "ADD_TASKS":
      return [...action.payload]
    case "DELETE_TASK":
      return state.filter((task)=>{
        return task._id!==action.payload
      })
    default:
      return state;
  }
}

export const TodoListContext=createContext()



const TodoListContextProvider = ({children}) => {
  const [state,dispatch]=useReducer(todoListReducer,[])
  useEffect(()=>{
    const fetchTasks=async()=>{
      const response=await fetch("/todolist")
      const tasks=await response.json()
      
      if(response.ok){
        dispatch({type:"ADD_TASKS",payload:tasks})
      }

    }
    fetchTasks()
  },[])

 
  return (
    <TodoListContext.Provider value={{state,dispatch}}>
        {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider