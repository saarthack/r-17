import React from 'react'
import Card from './components/Card'

const App = () => {

  const arr = ['Anuj','Yash','Suyash','Adarsh','Asha','Prashant','Asaan hai']
  
  return (
    <div className='flex flex-wrap p-4 gap-2'>
      {arr.map(function(elem,idx){

        return <Card username={elem} num={idx} />
      })}
    </div>
  )
}

export default App