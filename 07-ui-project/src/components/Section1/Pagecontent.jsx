import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10  '>
      <Leftcontent/>
      <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pagecontent
