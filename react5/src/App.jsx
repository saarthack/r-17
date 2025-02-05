import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  
  function submitHandler(e){
    e.preventDefault()
    console.log(username);

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
        <input type="text" placeholder='Enter email' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App