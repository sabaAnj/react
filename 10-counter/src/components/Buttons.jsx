
const Buttons = (props) => {

  return (
    <div className='flex justify-between w-75 bg-slate-200/60 rounded-full'>

      <button className='border-2 bg-linear-to-r from-rose-500 to-red-400 text-white h-20 w-20 rounded-full text-2xl hover:text-gray-700/80 transition duration-200' onClick={props.decrement}>
      -</button>

      <button className='bg-slate-200 p-3 m-2 rounded-2xl hover:bg-slate-300 text-gray-700 transition duration-200' onClick={props.reset}>
      RESET</button>

      <button className='border-2 bg-linear-to-r from-indigo-500 to-violet-500 text-white h-20 w-20 rounded-full text-2xl hover:text-gray-700/80 transition duration-200' onClick={props.increment}>
      +</button>

    </div>
  )
}

export default Buttons
