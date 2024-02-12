
import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import swal from 'sweetalert'
import './WheelComponent.css'

function WheelComponent({ selectedUser }) {
  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
    { option: '3' },
    { option: '4' },
  ]

  const [objetoDato, setObjetoDato] = useState({ option: '' });

  const [selectedUserIds, setSelectedUserIds] = useState([objetoDato]);//array donde guardamos los id de los usuarios seleccionados
  //ademas de guardar el id de los seleccionador vamos a guardar el resto de datos para luego poder mostrar el ganador
  const [userList, setUserList] = useState([]);

  const [primero, SetPrimero] = useState(true);//test

  const [contador, setContador] = useState(0);


  // //Del Repositorio de la ruleta
  // interface WheelData {
  //   option?: string;
  //   image?: ImageProps;
  //   style?: StyleType; // Optional
  //   optionSize?: number; // Optional
  // }



  useEffect(() => {
    // Cada vez que objetoDato cambie, actualizamos selectedUserIds

    if (objetoDato.option != '') {
      if (primero) {
        //si es el primer alumno seleccionado, "vaciamos" el array de objetos e introducimos solo ese usuario, para quitar el espacio blanco inicial
        setSelectedUserIds([objetoDato]);
        SetPrimero(false);
        //aumentamos el contador ya que acabamos de añadir un alumno a la selección
        let auxContador = contador + 1;
        setContador(auxContador);
      } else {
        //primero comprobamos que el usuario seleccionado no esté ya añanido a la lista de ids de usuarios, si es asi lo eliminamos de la lista
        if (selectedUserIds.some(item => item.option === objetoDato.option)) {
          // Si ya está presente, eliminarlo del array
          const nuevoArray = selectedUserIds.filter(item => item.option !== objetoDato.option);
          setSelectedUserIds(nuevoArray);
          //el contador de alumnos quitar uno, ya que acabamos de eliminar un alumno de la selección
          let auxContador = contador - 1;
          setContador(auxContador);
        } else {
          setSelectedUserIds(prevIds => [...prevIds, objetoDato]);
          //aumentamos el contador ya que se ha añadido un alumno
          let auxContador = contador + 1;
          setContador(auxContador);
        }
      }
    }

  }, [objetoDato]);

  // Almacenamos el id del usuario seleccionado en el array cuando seleccionamos un nuevo elemento
  useEffect(() => {

    if ((selectedUser.id != '77')) {
      setObjetoDato({ option: selectedUser.id });
      //guardamos los datos del alumno seleccionado en el array auxiliar
      setUserList(prevList => [...prevList, selectedUser]);
    }
  }, [selectedUser]);



  console.log(selectedUserIds);

  //export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    //el sorteo debe tener al menos dos participantes y máximo 10
    if (contador > 1 && contador < 11) {
      if (!mustSpin) {
        const newPrizeNumber = Math.floor(Math.random() * selectedUserIds.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
      }
    } else {
      // window.alert("El nº de alumnos seleccionados debe estar entre 2 y 20 incluidos, revise el nº de alumnos añádidos");
      modalBotones('¡Cuidado!', 'Debe seleccionar entre 2 y 10 alumnos', 'error', true);
    }
  }
function modalBotones(titulo, texto, icono, danger) {
        swal({
            title: titulo,
            text: texto,
            icon: icono,
            buttons: "Continuar",
            dangerMode: danger,
            closeOnClickOutside: false,
            closeOnEsc: false,
        });
    };

  //console.log(selectedUserIds);

  // Función para recuperar el alumno seleccionado
  const getSelectedElement = () => {

    if (selectedUserIds && selectedUserIds.length > 0) {
      let idSeleccionado =  selectedUserIds[prizeNumber].option;
      return userList.find(userList => userList.id === idSeleccionado);
    }
    return null;
  }

  function showUserWinner() {
    //el sorteo solo se realiza si tenemos entre 2 y 10 usuarios seleccionados, comprobarlo, ya que si no es asi no tenemos nada que mostrar
    if (contador > 1 && contador < 11) {
      const seleccionado = getSelectedElement();//recuperamos id del alumno seleccionado
      // window.alert("el alumno seleccionado es: " + seleccionado.nombre+" "+seleccionado.apellido+" "+seleccionado.apellido2);
      modalBotones('El ganador es:', seleccionado.nombre+" "+seleccionado.apellido+" "+seleccionado.apellido2,  "success", false);
    }
  }

  return (
    <>
    <div className='mostrarRuleta'>
      <Wheel className="wheel"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        //  data={data}
        data={selectedUserIds}
        backgroundColors={['pink', 'white']}
        textColor='black'

        onStopSpinning={() => {
          setMustSpin(false);
          showUserWinner();
        }}

      />
      <button className='buttonLogin' onClick={handleSpinClick}>SPIN</button>
      </div>
    </>
  )
}
export default WheelComponent



