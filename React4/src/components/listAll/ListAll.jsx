import './ListAll.css'
import { useState } from 'react'
import { UserService } from "../adminList/userService";



function ListAll({ onRowClick }) {

  const [userObject, setUserObject] = useState({
    id: "0",
    nombre: "",
    apellido: "",
    apellido2: "",
    email: "",
    telefono: ""
  });

  const [userListObject, setUserListObject] = useState([]);

  const [filasSeleccionadas, setFilasSeleccionadas] = useState([]);

  //esta es la función que carga los datos almacenados en el json
  async function getData() {
    //accedo a UserService, en concreto a su métod GET. Como este método al ejecutarse retorna los datos de los usuarios,
    //lo que almaceno en la variable users son esos datos.
    let users = await UserService.getAllUsers();
    //ahora actualizo el estado de userList con esta variable (usuarios)
    setUserListObject(users);

  };

  //LLamo a getData() para traer los datos
  getData();


  function handleRowClick(user, index) {
    //setSelectedRowIndex(index); // Actualiza la fila seleccionada
    let fila = document.getElementById(index);
    setFilasSeleccionadas([...filasSeleccionadas, index]);
    if (fila) {
      let celdas = fila.getElementsByTagName('th'); // Obtener todas las celdas td de la fila

      for (let i = 0; i < celdas.length; i++) {
        if (filasSeleccionadas.includes(index)) {
          celdas[i].style.backgroundColor = 'cornflowerblue'; // Cambiar el color de fondo de cada celda
          //sacar de la lista
          // Utilizamos filter para crear un nuevo array que excluye el elemento a eliminar, el inidicado por index en este caso
          const nuevoArray = filasSeleccionadas.filter(elemento => elemento !== index);
          // Actualiza el estado con el nuevo array
          setFilasSeleccionadas(nuevoArray);
        } else {
          celdas[i].style.backgroundColor = 'pink';
          //incluir en la lista de filas seleccionadas
          setFilasSeleccionadas([...filasSeleccionadas, index]);
        }


        // if(celdas[i].style.backgroundColor === 'cornflowerblue'){
        //   celdas[i].style.backgroundColor = 'pink';
        // }


      }
    }
    onRowClick(user); // Llama a la función proporcionada desde el componente padre
  }

  return (
    <>
      <section className="mostrarDatos">
        <section className="seccion_datos">
          <table id="tablaDatos" className="tablaDatos">
            <thead className="tablaHead">
              <tr>
                <th name="celdaName" id="celdaNombre">
                  Nombre
                </th>
                <th name="celdaApellido1" id="celdaApellido">
                  Apellido 1
                </th>
                <th name="celdaApellido2" id="celdaApellido2">
                  Apellido 2
                </th>
                <th name="celdaRol" id="celdaEmail">
                  Email
                </th>
                <th name="celdaClase" id="celdaTelefono">
                  Teléfono
                </th>
              </tr>
            </thead>
            <tbody>
              {userListObject.map((user, index) => (
                // <tr key={index} id={index} onClick={() => onRowClick(user)}>
                <tr key={index} id={index} onClick={() => handleRowClick(user, index)}>
                  <th>{user.nombre}</th>
                  <th>{user.apellido}</th>
                  <th>{user.apellido2}</th>
                  <th>{user.email}</th>
                  <th>{user.telefono}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default ListAll