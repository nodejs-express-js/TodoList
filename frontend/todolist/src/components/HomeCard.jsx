import React from 'react';
import styles from './HomeCard.module.css'; // Import CSS file
import useDeleteTask from '../Hooks/useDeleteTask';

const HomeCard = ({task}) => {
  const {error,isloading,deleteTask}=useDeleteTask()
  return (
    <div className={styles.homeCard}> {/* Apply class name */}
    <div className={styles.minicontainer}>
        <div className={styles.task}>{task.task}</div> {/* Apply class name */}
        <div className="material-symbols-outlined" id={styles.deletebutton} onClick={()=>{deleteTask(task._id)}}>delete_forever</div>
    </div>
        
        <div className={styles.subtask}>{task.subtask}</div> {/* Apply class name */}
        <div className={styles.time}>{task.time}</div> {/* Apply class name */}
        {error ? <div>error</div> : <></>}
    </div>
  );
}

export default HomeCard;
