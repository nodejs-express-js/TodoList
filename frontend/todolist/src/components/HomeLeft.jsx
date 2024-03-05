import React from 'react'
import HomeCard from './HomeCard'
import Home from './Home'
import { useTodoList } from '../Hooks/useTodoList'
const HomeLeft = () => {
    const {state:tasks}=useTodoList()
    
  return (
    <div style={{width:"75%"}}>
        {tasks.map((task,id)=>{
            return <HomeCard key={id} task={task}></HomeCard>
        })}
    </div>
  )
}

export default HomeLeft