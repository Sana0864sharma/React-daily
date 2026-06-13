import React, { useState } from 'react'

const Counter = () => {
   const [num, setnum] = useState(0)
   function increasekro(){
    setnum(num+1)
   }
   function decreasekro(){
    setnum(num-1)
   }
   function jumpby5(){
    setnum(num+5)
   }
  return (
    <div>
        <h1>{num}</h1>
      <button  onClick={increasekro}id='green'>Increase</button>
      <button onClick={decreasekro} id='red'>Decrease</button>
      <button id='fhutt' onClick={jumpby5}>Increase by 5</button>
    </div>
  )
}

export default Counter
