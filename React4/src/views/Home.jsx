import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageAdminList from '../components/adminList/PageAdminList'
import AdminList from './AdminList'
import ListAll from '../components/listAll/ListAll'
import './Home.css'




function Home() {


  return (
    <>

      {/* <p>hola soy la pagina Home</p> */}


      <div className='container'>
        <div className='containerLeft'>
          <button type="button" ><Link to="/AdminList">Administrar Lista</Link></button>
        </div>
        <div className='containerRigth'>
          <ListAll />
        </div>
      </div>

    </>
  )
}

export default Home
