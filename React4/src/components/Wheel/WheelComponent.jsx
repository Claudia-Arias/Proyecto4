import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import  './WheelComponent.css';

function WheelComponent () {
const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
]

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

  return (
    <>
      <Wheel className="wheel"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

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