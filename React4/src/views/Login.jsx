import { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import "./login.css";
import Footer from "../components/NavFooter/Footer"



function Login() {


const [textoBoton,setTextoBoton] =useState("Login");

  function handleLogin() {
    setTextoBoton=("hola");


  }
  return (
    <>
   
      <div className="loginname">
        <h2>Wheel of Doom</h2>
        <form>
          <div className="loginusuario">
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" name="username" required></input>
          </div>
          <div className="logincontraseña">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required></input>
          </div>
          <button className= "buttonLogin" text="login" type="button" onClick= {handleLogin}><Link to="/Home">{textoBoton}</Link></button>
          
        </form>
      </div>
    
    <Footer/>
     
    </>
  )
}

export default Login
