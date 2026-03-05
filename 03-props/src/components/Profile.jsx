import React from 'react'

const Profile = (props) => {
  return (
      <div className='card'>
        <img src={props.img} alt='profile' />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, omnis.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Profile
