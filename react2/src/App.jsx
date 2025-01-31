import React from 'react'
import Card from './components/Card'

const App = () => {
  const arr = [
    {
      img: 'https://images.unsplash.com/photo-1736754074555-54b6abcb2fb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      username: 'Anupama',
      age: 44,
      city: 'Bhopal'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1736194026187-39e23ae676e0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
      username: 'Anuj',
      age: 20,
      city: 'Bhopal'
    },
    {
      img: 'https://images.unsplash.com/photo-1735230495173-acf77f646286?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
      username: 'Anish',
      age: 22,
      city: 'Patna'
    },
    {
      img: 'https://images.unsplash.com/photo-1735977479864-d8a2612cee6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
      username: 'Prashant',
      age: 23,
      city: 'Mumbai'
    },
  ]

  return (
    <div>
      {arr.map(function(elem){

        return <Card user={elem} />
      })}
    </div>
  )
}

export default App