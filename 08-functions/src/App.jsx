import React from 'react'

const App = () => {
  function btnclick(){
    console.log('click here')
  }
   function onscrolling(val){
      console.log('page scorlling at rate of .....',val)
    }
  return (
    // <div>
    //   <button onClick={btnclick}>CLick here</button>
    //   <button onMouseEnter={function(){
    //     console.log('mouse enter')
    //   }}>Mouse Enter</button>
    //   <input  onChange={function(elem){
    //    console.log(elem.target.value)
    //   }} type="text" placeholder='Enter Text Here' />
    // </div>
   
    <>
    <div  onWheel={(elem)=>{
      onscrolling(elem.deltaY)
    }}className="page1"> </div>
    <div className="page2"></div>
    <div className="page3"></div>
    </>
    
  )
}

export default App
