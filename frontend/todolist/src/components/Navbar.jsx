import React from 'react'
import styles from './Navbar.module.css'
import { useUser } from '../Hooks/useUser'
import useLogout from '../Hooks/useLogout'
import {useNavigate } from 'react-router-dom'
export const Navbar = () => {
  const {state,dispatch}=useUser()
  const navigate=useNavigate();
  const logout=useLogout();
  const logouthandler=()=>{
    logout()
  }
  const signuphandler=()=>{
    navigate("/signup")
  }
  const loginhandler=()=>{
    navigate("/login")
  }
  return (
    <div className={styles.container}>
      <div  onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}>Todo List</div>
      {state.user ? <div style={{display:"flex",padding:"1rem"}}><div style={{padding:"0rem 1rem 0rem 1rem"}}>{state.user.email}</div><div onClick={logouthandler} style={{cursor:"pointer"}}>logout</div></div> :<div style={{display:"flex"}}>
      <div  onClick={signuphandler} style={{cursor:"pointer",padding:"0rem 1rem 0rem 1rem"}}>signup</div>
      <div  onClick={loginhandler} style={{cursor:"pointer"}}>login</div>


      </div> }
    </div>
  )
}

  