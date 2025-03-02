import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import { UserDataContext } from './context/UserContext'

const App = () => {

  const data = useContext(UserDataContext)



  
  return (
    <div className='text-white'>
      {data}
      <Navbar />
    </div>
  )
}

export default App