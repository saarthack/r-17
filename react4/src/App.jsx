import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [colorX, setColorX] = useState(0)
  const [colorY, setColorY] = useState(0)
  const [colorZ, setColorZ] = useState(0)
  
  return (
    <div>
      <Card colorX={colorX} colorY={colorY} colorZ={colorZ} />
      <button
        onClick={()=>{
          setColorX(Math.floor(Math.random()*256))
          setColorY(Math.floor(Math.random()*256))
          setColorZ(Math.floor(Math.random()*256))
        }}
      >Change Color</button>
    </div>
  )
}

export default App