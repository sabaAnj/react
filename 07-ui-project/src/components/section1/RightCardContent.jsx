import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='flex flex-col p-6 justify-between h-full w-ful absolute top-0 left-0 rounded-4xl'>
            
            <h2 className='bg-amber-50 rounded-full h-8 w-8 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>

            <div className='flex flex-col gap-7'>

                <p className='text-white text-shadow-2xs font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sunt eum incidunt excepturi fuga culpa!</p>

                <div className='flex justify-between'>
                    <button className={`${props.color} rounded-4xl px-3 py-1 text-white font-semibold`}>{props.tag}</button>
                    <button className={`${props.color} text-white rounded-4xl px-3 py-1`}><i className="ri-arrow-right-line"></i></button>
                </div>

            </div>

    </div>
  )
}

export default RightCardContent
