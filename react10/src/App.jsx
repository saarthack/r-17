import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [imageData, setImageData] = useState([])

  async function btnClicked(){

    const response = await axios.get('https://picsum.photos/v2/list')

    console.log(response.data);

    setImageData(response.data)

  }
  

  return (
    <div className='p-2'>
      
      <button className='bg-green-600 text-white px-4 py-2 rounded active:scale-95' onClick={btnClicked}>Get Data</button>

      <div>
        {imageData.map(function(elem,idx){

          return <div className='inline-block m-1'>
            <img className='h-32' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App