import React, { useState, useEffect } from 'react'
import { Wheel } from 'react-custom-roulette'
import  './WheelComponent.css';

function WheelComponent ({ selectedUser}) {
const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black'} },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
  { option: '3' },
  { option: '4' },
]

const [objetoDato, setObjetoDato] = useState({ option: ''});

const [selectedUserIds, setSelectedUserIds] = useState([objetoDato]);//array donde guardamos los id de los usuarios seleccionados

// //Del Repositorio de la ruleta
// interface WheelData {
//   option?: string;
//   image?: ImageProps;
//   style?: StyleType; // Optional
//   optionSize?: number; // Optional
// }



useEffect(() => {
  // Cada vez que objetoDato cambie, actualizamos selectedUserIds
  if (objetoDato.option==='') { 
    const modifiedObjetoDato = { ...objetoDato };
   if (selectedUser) {
    // Realizar las modificaciones necesarias en el objetoDato
  modifiedObjetoDato.option = selectedUser.id;
   }

  }
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
       backgroundColors={['pink', 'white']}
       textColor='black'
        
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





// const selectedUserIdsInitial = [];

// function WheelComponent({ selectedUser }) {
//   const [selectedUserIds, setSelectedUserIds] = useState(selectedUserIdsInitial);
//   const [mustSpin, setMustSpin] = useState(false);
//   const [prizeNumber, setPrizeNumber] = useState(0);

//   useEffect(() => {
//     if (selectedUser) {
//       setSelectedUserIds(prevIds => [...prevIds, { option: selectedUser.id }]);
//     }
//   }, [selectedUser]);

//   console.log(selectedUserIds);
//   const handleSpinClick = () => {
//     if (!mustSpin) {
//       const newPrizeNumber = Math.floor(Math.random() * selectedUserIds.length);
//       setPrizeNumber(newPrizeNumber);
//       setMustSpin(true);
//     }
//   };
