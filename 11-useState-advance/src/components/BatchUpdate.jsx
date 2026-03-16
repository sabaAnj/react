import React, { useState } from 'react'

const BatchUpdate = () => {

    const [num, setNum] = useState(0)

    const btnClicked = () => {
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
        setNum(prev=>(prev+1))
    }

  return (
    <div className='num'>
        <h1>{num}</h1>
        <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default BatchUpdate
