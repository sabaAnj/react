import React, { useState } from 'react'

const DiffWay = () => {
      
    const [fruit, setFruit] = useState({name:'Apple', color:'Red'})
  
    const btnClicked = () => {
        setFruit(prev=>({...prev, color:'Green'}))
    }
  
    return (
      <div className='diff'>
        <h1>Changing the info using destructuring.</h1>
        <p>{fruit.name}, {fruit.color}</p>
        <button onClick={btnClicked}>Change It</button>
      </div>
    )
}

export default DiffWay
