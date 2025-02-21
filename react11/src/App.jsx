import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  const [productData, setProductData] = useState([])

  const [cartData, setCartData] = useState([])

  const btnClicked = async ()=>{
    
    const response = await axios.get('https://fakestoreapi.com/products')

    setProductData(response.data)
  }

  const addToCart = (idx)=>{
    
    const copyCartData = [...cartData]

    copyCartData.push(productData[idx])

    setCartData(copyCartData)
    
  }

  return (
    <div className='p-4'>
      
      <button onClick={btnClicked} className='text-white font-medium bg-green-500 px-5 py-2 rounded mb-2 active:scale-95'>Get Product</button>
      <div className='flex gap-2'>
        <div className='w-3/4 rounded bg-blue-100 flex gap-2 p-3 flex-wrap'>
            {productData.map(function(elem,idx){

              return <div key={idx} className='w-40 bg-white text-center p-4 rounded'>
                  <img className='h-24 mx-auto' src={elem.image} alt="" />
                  <h1 className='h-18 overflow-hidden'>{elem.title}</h1>
                  <h3>${elem.price}</h3>
                  <button onClick={()=>{
                    addToCart(idx)
                  }} className='bg-yellow-400 text-white px-4 py-1 rounded mt-3 active:scale-95'>Add to Cart</button>
              </div>
            })}
        </div>
        <div className='w-1/4 rounded bg-pink-100 p-2'>
              {cartData.map(function(elem,idx){

                return <div className='flex items-center bg-white p-2 rounded mb-2 gap-2'>
                  <img className='h-16' src={elem.image} alt="" />
                  <h1>{elem.title}</h1>
                  <h3>${elem.price}</h3>
                </div>
              })}
        </div>
      </div>
    </div>
  )
}

export default App