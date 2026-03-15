import React, { useState } from 'react'
import Display from './Display'
import Buttons from './Buttons'

const Box = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className='h-120 w-100 bg-white backdrop-blur-md shadow-2xl border border-slate-200 rounded-4xl flex flex-col justify-around items-center'>
      <Display count={count} />
      <Buttons increment={increment} decrement={decrement} reset={reset} />
    </div>
  )
}

export default Box
