import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const AllContent = (props) => {
  return (
    <div className='flex justify-between'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default AllContent
