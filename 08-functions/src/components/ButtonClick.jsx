import React from 'react'

const ButtonClick = () => {
  return (
    <div>
      <button className='bg-red-400 border-2 border-solid m-12 p-2 rounded-xl' onClick={() => {
        console.log("you clicked the button");
      }}>Click me!</button>
    </div>
  )
}

export default ButtonClick
