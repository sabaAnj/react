import React from 'react'
import { useState } from 'react'

const Basic = () => {
    
    const [age, setAge] = useState(20);
    const [name, setName] = useState('Aman');
    const [num, setNum] = useState([10,20,30])

  return (
    <div className='p-5 text-2xl flex flex-col gap-3'>

      <h1>Name is {name}. <br /> Age is {age}.</h1>
      <button className='border-2 bg-gray-200 text-black border-solid rounded-lg w-30 h-10' onClick={
        
        () => {
            setName("Sarthak");
            setAge(25); 
            setNum([99,98,97])
            }
            
       }> Change It! </button> 

    </div>
  )
}

export default Basic
