import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoListContextProvider from './state/TodoListContextProvider.jsx'
import UserContextProvider from './state/UserContextProvider.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
        <UserContextProvider>   
          <TodoListContextProvider>
            <App />
          </TodoListContextProvider>
        </UserContextProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
