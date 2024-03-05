import React, { useState } from 'react';
import styles from './HomeRight.module.css'; // Import CSS file
import useAddTask from '../Hooks/useAddTask';

const HomeRight = () => {
  const [task,setTask]=useState("")
  const [time,setTime]=useState("")
  const [subtask,setSubTask]=useState("")

  const {error,isloading,addTask}=useAddTask()
  return (
    <form className={styles.homeRight} action='#'>
      <label className={styles.label}>Task</label> {/* Apply class name */}
      <input className={styles.input} type="text" required={true} onChange={(e)=>{setTask(e.target.value)}} value={task}></input> {/* Apply class name */}
      <label className={styles.label}>Time</label> {/* Apply class name */}
      <input className={styles.input} type="text" required={true} onChange={(e)=>{setTime(e.target.value)}} value={time}></input> {/* Apply class name */}
      <label className={styles.label}>Subtask</label> {/* Apply class name */}
      <input className={styles.input} type="text" onChange={(e)=>{setSubTask(e.target.value)}} value={subtask}></input> {/* Apply class name */}
      <button className={styles.submitButton} type='submit' onClick={()=>addTask(task,time,subtask)} disabled={isloading}>Add Task</button> {/* Apply class name */}
      <div>{error ? error : "" }</div>
    </form>
  );
}

export default HomeRight;
