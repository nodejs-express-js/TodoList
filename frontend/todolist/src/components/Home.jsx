import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
    </div>
  )
}

export default Home