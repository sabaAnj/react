import React from 'react'
import Profile from './components/Profile'
import './App.css'

const App = () => {
  return (
    <div className='parent'>

      <Profile user='Tabassum' age={20} img='https://i.pinimg.com/webp/736x/46/19/d4/4619d4380613eacaf73ca540b6b1131d.webp' />

      <Profile user='Mahrukh' age={19} img='https://images.unsplash.com/photo-1772307956262-42d4f7696876?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D' />

      <Profile user='Tasmeya' age={20} img='https://images.unsplash.com/photo-1769937060137-22671294c3cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' />

    </div>
  )
}

export default App
