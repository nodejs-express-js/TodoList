import {Navbar} from './components/Navbar'
import styles from './App.module.css'
import { useTodoList } from './Hooks/useTodoList'
import Home from './components/Home';
function App() {
  const {state,dispatch}=useTodoList();
  
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
