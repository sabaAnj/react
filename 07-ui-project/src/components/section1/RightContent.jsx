import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='rightContent' className=' flex gap-4 overflow-x-auto w-180 h-120 mt-9 p-2'>
      {props.users.map( (elem, idx) => {

        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
        
      })}
    </div>
  )
}

export default RightContent
