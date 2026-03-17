import React from 'react'

const App = () => {
  localStorage.clear()

  localStorage.setItem("user","saba")

  const user = localStorage.getItem('user')
  console.log(user);

  localStorage.setItem('age', '18')
  localStorage.setItem('fruit','mango')
  localStorage.setItem('color', 'red')

  localStorage.removeItem('color')

  const info = {
    usernam:'Tabba',
    age:20,
    favColor:'pink',
    favFruit:'Litchi'
  }

  // object got converted into string, bcz we can store only string values on local storage
  localStorage.setItem('info', JSON.stringify(info))

  console.log(typeof(localStorage.getItem("info")))

  //to convert it back to its orginal type, use parse
  const original = JSON.parse(localStorage.getItem('info'))
  console.log(typeof(original))

  return (
    <div>
      Hello World
    </div>
  )
}

export default App
