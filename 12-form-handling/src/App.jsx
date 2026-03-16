import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    console.log("Form submitted")
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
