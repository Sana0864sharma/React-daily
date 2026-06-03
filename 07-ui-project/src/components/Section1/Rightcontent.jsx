import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
   <div id='right' className='h-full w-3/4 p-4 flex gap-10 flex-nowrap overflow-auto'>
     {props.users.map(function(elem,idx){
      return <RightCard img={elem.img}id={idx} tag={elem.tag} intro={elem.intro}/>
     })}
     
    </div>
  )
}

export default Rightcontent
