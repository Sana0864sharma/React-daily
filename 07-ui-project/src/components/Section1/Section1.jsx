import React from 'react'
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full flex flex-col'>
        <Navbar/>
        <Pagecontent users={props.users}/>
      
    </div>
  )
}

export default Section1
