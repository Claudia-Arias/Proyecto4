import { useState } from 'react'
import {Link} from 'react-router-dom'



function Home() {


  return (
    <>
    
     <p>hola soy la pagina Home</p>
     <button type='button'>
      <Link to="/AdminList">Ir a About</Link>
     </button>

     <button type='button'>
      <Link to="/Raffle">Ir a About</Link>
     </button>
    
  

      {/* <p>hola soy la pagina Home</p> */}


    </>
  )
}

export default Home



