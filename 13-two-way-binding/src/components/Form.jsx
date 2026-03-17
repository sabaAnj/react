import { useState } from "react"


const Form = () => {

    const [title, setTitle] = useState('')

    const submitHandler = (e) => {
        console.log("Form Submitted by", title)
        e.preventDefault()
        setTitle('')
    }

    const inputHandler = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <input 
        type='text' 
        placeholder='Enter your name' 
        value={title}
        onChange={inputHandler}     //React automatically sends the event object to the handler.
        className='border px-4 py-2 m-4 text-xl' />

        <button className='bg-blue-200 text-xl px-4 py-2 rounded-md hover:bg-blue-300 border'>Submit</button>
      </form>

    </div>
  )
}

export default Form
