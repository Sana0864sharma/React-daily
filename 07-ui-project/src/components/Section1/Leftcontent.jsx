import React from 'react'

import Herotext from './Herotext'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 bg-white flex flex-col justify-between'>
      <Herotext/>
      <Arrow/>
    </div>
  )
}

export default Leftcontent
