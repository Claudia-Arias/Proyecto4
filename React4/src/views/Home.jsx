import { useState } from 'react'
import {Link} from 'react-router-dom'



function Home() {


  return (
    <>
    
     <p>Selecciona una opción</p>
     <button type='button'>
      <Link to="/AdminList">Administrador Listas</Link>
     </button>

     <button type='button'>
      <Link to="/Raffle">Sorteo</Link>
     </button>
    
  

      {/* <p>hola soy la pagina Home</p> */}


    </>
  )
}

export default Home
