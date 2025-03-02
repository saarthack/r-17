import React, { useContext } from 'react'
import { UserDataContext } from '../../context/UserContext'

const NavPart1 = () => {
  const data = useContext(UserDataContext)
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default NavPart1