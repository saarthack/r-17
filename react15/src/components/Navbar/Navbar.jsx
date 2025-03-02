import React, { useContext } from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'
import { UserDataContext } from '../../context/UserContext'

const Navbar = () => {
    const data = useContext(UserDataContext)

  return (
    <div className='flex justify-between px-4 py-2'>
        {data}
        <NavPart1 />
        <NavPart2 />
    </div>
  )
}

export default Navbar