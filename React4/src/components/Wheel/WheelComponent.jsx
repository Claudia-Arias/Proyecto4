import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import  './WheelComponent.css';

function WheelComponent ({ selectedUser}) {
const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
]

const [objetoDato, setObjetoDato] = useState({ option: ''});

const [selectedUserIds, setSelectedUserIds] = useState([objetoDato]);//array donde guardamos los id de los usuarios seleccionados


useEffect(() => {
  // Cada vez que objetoDato cambie, actualizamos selectedUserIds
  setSelectedUserIds(prevIds => [...prevIds, objetoDato]);
}, [objetoDato]);

 // Almacenamos el id del usuario seleccionado en el array cuando el componente se monta
 useEffect(() => {
  if (selectedUser ) {

    setObjetoDato({...objetoDato, option: selectedUser.id});
    //  // Añade el objetoDato al array selectedUserIds
    //  setSelectedUserIds(prevIds => [...prevIds, objetoDato]);
  }
}, [selectedUser]);


console.log(selectedUserIds);

//export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  console.log(selectedUserIds);

  return (
    <>
      <Wheel className="wheel"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        //  data={data}
       data={selectedUserIds}
        
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className='buttonLogin' onClick={handleSpinClick}>SPIN</button>
    </>
  )
//}
}
export default WheelComponent