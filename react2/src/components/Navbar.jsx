import React from 'react'
import Navpart1 from './Navpart1'
import Navpart2 from './Navpart2'

const Navbar = (props) => {
    return (
        <div className='nav'>
            <Navpart1 brandName={props.brand} />
            <Navpart2 />
        </div>
    )
}

export default Navbar