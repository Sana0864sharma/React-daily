import React, { useState } from 'react'

function App() {
  const [num,Setnum] = useState(0)
  const [user, setuser] = useState('Anusha')
  function changekro(){
    Setnum(10)
    setuser('Nabin')
  }
  return (
    <>
    <h1>Value of a is{num} </h1><br /><h1>value of user is {user}</h1><br />
    <button onClick={changekro}>Click</button>
    </>
  );
}

export default App;


