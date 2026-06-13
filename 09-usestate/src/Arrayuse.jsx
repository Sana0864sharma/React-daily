import React, { useState } from 'react'


const Arrayuse = () => {
  const [num, setnum] = useState({user:'Anusha',age:30})
const change= ()=>{
  // const newNum ={...num};
  // newNum.user='punam'
  // setnum(newNum)
  setnum(prev=>({...prev,user:'punam'}))

}
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Arrayuse
  