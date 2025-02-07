import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')

  const [allUsers, setAllUsers] = useState(['Anuj','Dev','Aman'])
  
  const submitHandler = (e)=>{
    e.preventDefault()

    const copyUser = [...allUsers]

    copyUser.push(username)

    setAllUsers(copyUser)

    
    setUsername('')
  }


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        type="text" 
        placeholder='Enter name' />
        <button>Submit</button>
      </form>

        {allUsers.map(function(elem,idx){

          return <h5 key={idx}>{idx+1}. {elem}</h5>
        })}
      
    </div>
  )
}

export default App