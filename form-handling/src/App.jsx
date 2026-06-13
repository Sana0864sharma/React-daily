import React from 'react'

const App = () => {
  const submithandler= (e)=>{
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{submithandler(e)}}>
        <input type="text" name="" id="" placeholder='enter text here' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
