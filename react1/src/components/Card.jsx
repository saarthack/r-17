import React from 'react'

const Card = (props) => {

    
    return (
        <div className='text-white bg-black rounded px-5 py-2 text-xl font-semibold'>
            <h1>{props.num+1}. {props.username}</h1>
        </div>
    )
}

export default Card