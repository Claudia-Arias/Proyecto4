import { useState } from 'react'
import {Link} from 'react-router-dom'
import PageAdminList from '../components/adminList/PageAdminList'
import './AdminList.css'



function AdminList() {
  

  return (
    <>
    
     <p>hola soy la pagina administracion de listas</p>
    
     <PageAdminList />


    </>
  )
}

export default AdminList