import React from 'react';
import './Navbar.css'
import Logo from './img/logo.png'


function Navbar() {


  return (
    <>
    <nav className='navbar'>
        <div className='logo'>
        <img src= {Logo} alt='Arrabal School' />
            {/* <img src="./img/logo.png" alt="Arrabal School" /> */}
            <span>Arrabal School</span>
        </div>
        <div className='nav-buttons'>
            <button>Inicio</button>
            <button>Home</button>
            <button>Cerrar Sesion</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar;