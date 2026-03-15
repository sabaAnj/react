import React from 'react'

const MouseHover = () => {
  return (
    <div className='w-50 h-50 bg-blue-200 rounded-2xl m-3' onMouseMove={(event) => {
        console.log("Mouse Hover - ", event.clientY)
    }}>
      
    </div>
  )
}

export default MouseHover
