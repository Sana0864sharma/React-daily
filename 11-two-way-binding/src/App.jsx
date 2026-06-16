import React, { useState } from 'react'

const App = () => {
  const submithandler=(e)=>{
     e.preventDefault()
     console.log('Form Submiitted by',title)
     settitle('')
  }
  const [title, settitle] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" name="" 
        id="" 
        placeholder='enter text here' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
