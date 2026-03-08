import Heading from "./Heading"
import AllContent from "./AllContent.jsx"

const Section1 = (props) => {
  return (
    <div className='h-screen w-full p-9'>
      <Heading />
      <AllContent users={props.users} />
    </div>
  )
}

export default Section1
