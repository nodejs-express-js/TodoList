import {Navbar} from './components/Navbar'
import styles from './App.module.css'
import { useTodoList } from './Hooks/useTodoList'
import Home from './components/Home';
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import {Routes,Route} from "react-router-dom"
function App() {
  
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<div className={styles.container}>
          <Navbar></Navbar>
          <Home></Home></div>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
