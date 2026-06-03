import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6' >
            <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-white mb-15 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptate! Labore non magni minima maxime!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 rounded-3xl text-lg font-medium px-8 py-3 text-white'>{props.tag} </button>
            <button className='bg-blue-600 rounded-3xl  font-medium px-4 py-3 text-white '> <ArrowRight /> </button>
                </div>
            </div>
            
        </div>
  )
}

export default RightCardContent
