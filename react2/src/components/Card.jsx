import React from 'react'

const Card = (props) => {

    
  return (
    <div className='card'>
        <img src={props.user.img} alt="" />
        <h1>{props.user.username}</h1>
        <h3>{props.user.age}, {props.user.city}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, numquam!</p>
    </div>
  )
}

export default Card