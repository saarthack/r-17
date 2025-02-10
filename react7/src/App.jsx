import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    
    const copyUser = [...allUsers]

    copyUser.push({username,email,imageURL})

    setAllUsers(copyUser)
    
    setUsername('')
    setEmail('')
    setImageURL('')

  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        className='px-3 py-1 border-2 rounded m-2'
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        type="text" 
        placeholder='Enter name' />

        <input type="text" 
        className='px-3 py-1 border-2 rounded m-2'

        placeholder='Enter Email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />

        <input type="text"
        className='px-3 py-1 border-2 rounded m-2'
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
        placeholder='Paste Image URL'
        />
        <button
        className='px-3 bg-emerald-600 text-white py-1 border-2 rounded m-2'
        
        >Submit</button>
      </form>
      {allUsers.map(function(elem,idx){

        return <div>
          <h4>{elem.username}</h4>
          <h5>{elem.email}</h5>
          <img className='h-10' src={elem.imageURL} alt="" />
        </div>
      })}
    </div>
  )
}

export default App

