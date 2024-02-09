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

    return (
        <>
            <section className='mostrarDatos'>
                <section className="seccion_datos">
                    <table id="tablaDatos" className="tablaDatos" >
                        <thead className="tablaHead">
                            <tr>
                                <th name="celdaName" id="celdaNombre" >Nombre</th>
                                <th name="celdaApellido1" id="celdaApellido">Apellido 1</th>
                                <th name="celdaApellido2" id="celdaApellido2">Apellido 2</th>
                                <th name="celdaRol" id="celdaEmail">Email</th>
                                <th name="celdaClase" id="celdaTelefono">Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userListObject.map((user, index) => (
                                    <tr key={index} id={index} onClick={() => onRowClick(user)}>
                                        <th>{user.nombre}</th>
                                        <th>{user.apellido}</th>
                                        <th>{user.apellido2}</th>
                                        <th>{user.email}</th>
                                        <th>{user.telefono}</th>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </section>
            </section>
        </>
    )
}

export default ListAll