import React from 'react'
import { useState } from 'react';

const App = () => {
  
  const [user, setUser] = useState('Harsh')
  const [age, setAge] = useState(18)
  
  const changeUser = ()=>{
    setUser('Sarthak')
    setAge(20)
  }
  
  return (
    <div>
      <h1 className='text-xl'>User ka name hai {user}</h1>
      <h1 className='text-xl'>User ki Age hai {age}</h1>

      <button className='border-2' onClick={changeUser}>Change Username and Age</button>
      
    </div>
  )
}

export default App