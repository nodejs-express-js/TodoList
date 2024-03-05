import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoListContextProvider from './state/TodoListContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListContextProvider>
       <App />
    </TodoListContextProvider>
  </React.StrictMode>,
)
