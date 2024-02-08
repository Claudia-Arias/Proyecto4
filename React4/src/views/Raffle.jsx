import WheelComponent from '../components/Wheel/WheelComponent'
import ListAll from '../components/ListAll/ListAll'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Raffle() {


    return (
      <>
      
       <p>hola soy la pagina Home</p>
      <WheelComponent/>
    
  
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
  
  export default Raffle