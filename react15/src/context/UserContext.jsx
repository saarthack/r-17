import React, { createContext } from 'react'

export const UserDataContext = createContext()

const brandName = 'Sheryians'

const UserContext = ({children}) => {
  return (
    <div>
        <UserDataContext.Provider value={brandName}>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext