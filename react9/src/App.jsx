import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{

    e.preventDefault()

    const copyUser = [...allUsers]
    copyUser.push({username,role,imageURL})
    setAllUsers(copyUser)

    setUsername('')
    setRole('')
    setImageURL('')
  }

  const deleteHandler = (idx)=>{

    const copyUser = [...allUsers]
    copyUser.splice(idx,1)
    setAllUsers(copyUser)
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

        className='border-2 rounded px-4 py-2 m-2' type="text" placeholder='Enter Name' />

        <input 
        value={role}
        onChange={(e)=>{
          setRole(e.target.value)
        }}
        className='border-2 rounded px-4 py-2 m-2' type="text" placeholder='Enter Role' />

        <input 
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
        className='border-2 rounded px-4 py-2 m-2' type="text" placeholder='Paste Image URL' />
        <button className='bg-blue-400 text-white font-semibold rounded px-4 py-2 m-2'>Add User</button>
      </form>

      <div className='p-3'>
        {allUsers.map(function(elem,idx){

          return <div className='text-center m-2 rounded bg-black text-white px-8 py-3 inline-block' key={idx}>
              <img className='rounded-full object-cover h-20 w-20' src={elem.imageURL} alt="" />
              <h2 className='text-xl mt-2 mb-1'>{elem.username}</h2>
              <h4>{elem.role}</h4>
              <button onClick={()=>{
                deleteHandler(idx)
              }} className='bg-red-500 text-white px-3 py-1 mt-3 text-xs rounded'>Delete</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App