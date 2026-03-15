import React from 'react'

const Display = ({count}) => {
  return (
    <div>
      <div className='flex justify-center items-center h-50 w-70 bg-gray-100 rounded-2xl'>
        <h1 className='text-6xl text-indigo-900'>{count}</h1>
      </div>
    </div>
  )
}

export default Display
