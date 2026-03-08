import Section1 from "./components/section1/Section1"


const App = () => {

  const list = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      info: '',
      tag: 'Satisfied',
      color: 'bg-blue-400'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      info: '',
      tag: 'Underserved',
      color: 'bg-emerald-500'
    },
    {
      img: 'https://images.unsplash.com/photo-1748785826435-83c5062a5737?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      info: '',
      tag: 'Underbanked',
      color: 'bg-red-300'
    },
    
    {
      img: 'https://plus.unsplash.com/premium_photo-1661627522817-99a84c5c77e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
      info: '',
      tag: 'Average',
      color: 'bg-fuchsia-400'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661638162972-00ee1c6822d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8',
      info: " ",
      tag: 'Undervalued',
      color: 'bg-amber-300'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661776369935-86a5a8b3693b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgxfHx8ZW58MHx8fHx8',
      info: " ",
      tag: 'Pleased',
      color: 'bg-rose-500'
    }
  ];

  return (
    <div>
      <Section1 users={list} />
    </div>
  )
}

export default App
