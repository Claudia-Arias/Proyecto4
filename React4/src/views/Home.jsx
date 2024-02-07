import { useState } from 'react'
import {Link} from 'react-router-dom'
import PageAdminList from '../components/adminList/PageAdminList'
import AdminList from './AdminList'




function Home() {
  

  return (
    <>
    
     {/* <p>hola soy la pagina Home</p> */}
    
     <button type="button" ><Link to="/AdminList">Administrar Lista</Link></button>


    </>
  )
}

export default Home
