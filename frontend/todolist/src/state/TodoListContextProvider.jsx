import { createContext, useEffect, useReducer } from "react"
import { useUser } from "../Hooks/useUser"

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
    case "CLEAR_ALL_TASKS":
      return []
    default:
      return state;
  }
}

export const TodoListContext=createContext()



const TodoListContextProvider = ({children}) => {
  const {state:user}=useUser()
  const [state,dispatch]=useReducer(todoListReducer,[])
  useEffect(()=>{
    const fetchTasks=async()=>{
      console.log(user)
      if(user.user){
        const response=await fetch("/todolist",{
          method:"GET",
          headers:{
          "Content-Type":"application/json",
          "authorization":`Bearer ${user.user.token}`,
          }
        })
        const tasks=await response.json()
        if(response.ok){
          dispatch({type:"ADD_TASKS",payload:tasks})
        }
      }
    }
    fetchTasks()
  },[user])

 
  return (
    <TodoListContext.Provider value={{state,dispatch}}>
        {children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider