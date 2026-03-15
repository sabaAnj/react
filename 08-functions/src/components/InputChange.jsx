import React from 'react'

const InputChange = () => {

    const inputChanging = (event) => {
        console.log("User is typing...");
        console.log(event.target.value);
    }

  return (
    <div>
         <input type='text' placeholder='Enter you name' className='border-2 px-4 py-2 m-4' onChange={inputChanging}/>  {/* React automatically sends the event.. no need to pass the event object */}
    </div>
  )
}

export default InputChange
