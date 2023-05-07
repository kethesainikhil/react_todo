import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context, server } from '../main'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Header = () => {

    const {isAuthenticated , setIsAuthenticated , loading, setLoading} = useContext(Context)

    const logoutHandler = async () =>{
        setLoading(true);
        try {
             await axios.get(
              `${server}/logout`,
              {
                withCredentials: true,
              }
            );
      
            toast.success("logout successfully");
            setLoading(false);
            setIsAuthenticated(false);
          } catch (error) {
            toast.error("server error please wait !");
            setLoading(false);
            setIsAuthenticated(true);
          }
    }
    if(!isAuthenticated){
        <Navigate to={"/"}/>
    }
  return (
    <nav className='header'>
        <div>
            <h2>TODO APP.</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
                isAuthenticated ? <button onClick={logoutHandler} className='btn'>LogOut</button>:
                <Link to={"/login"}>Login</Link>
            }
            
        </article>


    </nav>
  )
}

export default Header
