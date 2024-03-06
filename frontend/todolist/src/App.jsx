import {Navbar} from './components/Navbar'
import styles from './App.module.css'
import { useTodoList } from './Hooks/useTodoList'
import Home from './components/Home';
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import {Routes,Route,Navigate} from "react-router-dom"
import { useUser } from './Hooks/useUser';
function App() {
  const {state}=useUser();

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={state.user ? <div className={styles.container}><Navbar></Navbar><Home></Home></div> : <Navigate to="/login"></Navigate>}></Route>
        <Route path="/login" element={!state.user ? <Login></Login> : <Navigate to="/"></Navigate>}></Route>
        <Route path="/signup" element={!state.user ? <Signup></Signup>: <Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  )
}

export default App
