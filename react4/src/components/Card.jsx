import React from 'react'

const Card = (props) => {

    console.log(props);
    return (
        <div>
            <div 
            style={{
                backgroundColor:`rgb(${props.colorX},${props.colorY},${props.colorZ})`
            }}
            className="box">

            </div>
        </div>
    )
}

export default Card