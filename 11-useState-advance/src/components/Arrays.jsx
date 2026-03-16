import React, { useState } from 'react'

const Arrays = () => {

    const [num, setNum] = useState([10, 20, 30])
    
    const btnClicked = () => {
        const newNum = [...num]
        newNum.push(40)
        setNum(newNum)
    }

  return (
    <div className='obj'>
      <h1>Changing the num using destructuring</h1>
      <p>{num}</p>
      <button onClick={btnClicked}>Change It</button>
    </div>
  )
}

export default Arrays
