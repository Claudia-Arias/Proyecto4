import WheelComponent from '../components/Wheel/WheelComponent'
import ListAll from '../components/listAll/ListAll'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/NavFooter/Footer";
import Navbar from "../components/NavFooter/Navbar";
import './Raffle.css'

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
      <div className="contenedorPrincipal">
        <div className="superior">
          <Navbar />
        </div>
        <div className='mostrarRuletaTabla'>
          <WheelComponent selectedUser={selectedUser} />
          <div className='container'>
            <div className='containerLeft'>
              <button type="button" ><Link to="/AdminList">Administrar Lista</Link></button>
            </div>
            <div className='containerRigth'>
              <ListAll onRowClick={handleRowClick} />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Raffle