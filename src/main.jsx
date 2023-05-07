import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/app.scss"
import { createContext } from 'react';
export const server = "https://nodejs-todo-app-8zcw.onrender.com";
export const Context = createContext({isAutheticated:false});
const APPWrapper =  () =>{
  const [isAuthenticated , setIsAuthenticated ] = useState(false)
  const [loading , setLoading ] = useState(false)
  const [user , setUser ] = useState(false)
    return(
    <Context.Provider value={{
      isAuthenticated,setIsAuthenticated,
      loading , setLoading,
      user , setUser
    }
    }>
      <App />
    </Context.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <APPWrapper />
  </React.StrictMode>,
)

