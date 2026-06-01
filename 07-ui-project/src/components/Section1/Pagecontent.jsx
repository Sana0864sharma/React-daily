import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = () => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10  '>
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Pagecontent
