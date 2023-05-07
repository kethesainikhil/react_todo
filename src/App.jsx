
import {BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import { Toaster } from "react-hot-toast"
import { Context, server } from "./main"
import { useContext } from "react"
import { useEffect } from "react"
import axios from "axios"

function App() {

  const {setUser,setIsAuthenticated} = useContext(Context);
  useEffect(()=>{
    axios.get(`${server}/me`,
   { withCredentials:true}
    ).then((res)=>{
      setUser(res.data.user);
      setIsAuthenticated(true);
    }).catch((error)=>{
      setUser({})
      setIsAuthenticated(false);
    })

  },[])

  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/register" element={<Register />}/>


      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
