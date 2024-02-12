import WheelComponent from '../components/Wheel/WheelComponent'
import ListAll from '../components/ListAll/ListAll'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Raffle() {

  const [selectedUser, setSelectedUser] = useState({
    id: "77",
    nombre: "",
    apellido: "",
    apellido2: "",
    email: "",
    telefono: ""
});
  // const [selectedUser, setSelectedUser] = useState(null);
  

  function handleRowClick(user) {
    setSelectedUser(user); // Actualiza el estado con los datos del usuario seleccionado
  }

    return (
      <>
      
       <p>Bienvenidos al sorteo</p>
      <WheelComponent selectedUser={selectedUser} />
        <div className='container'>
          <div className='containerLeft'>
            <button type="button" ><Link to="/AdminList">Administrar Lista</Link></button>
          </div>
          <div className='containerRigth'>
            <ListAll onRowClick={handleRowClick}/>
          </div>
        </div>
  
      </>
    )
  }
  
  export default Raffle
  