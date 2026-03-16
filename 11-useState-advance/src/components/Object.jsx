import React, { useState } from 'react'

const Object = () => {

    const [info, setInfo] = useState({name:"Tabba", age:20})

    const btnClicked = () => {
      const newInfo = {...info}
      newInfo.name = 'Tasmeya'
      setInfo(newInfo)
    }

  return (
    <div className='arr'>
      <h1>Changing the info using destructuring.</h1>
      <p>{info.name}, {info.age}</p>
      <button onClick={btnClicked}>Change It</button>
    </div>
  )
}

export default Object
