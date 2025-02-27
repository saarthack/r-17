import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [total, setTotal] = useState(0)

  const [allProducts, setAllProducts] = useState([])

  const [cartData, setCartData] = useState([])

  const btnClicked = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')

    setAllProducts(response.data)
  }

  const addToCartButtonClicked = (idx) => {

    const copyCartData = [...cartData]
    copyCartData.push(allProducts[idx])
    setCartData(copyCartData)

  }

  const cartElementDelete = (idx)=>{
    const copyCartData = [...cartData]
    copyCartData.splice(idx,1)
    setCartData(copyCartData)
  }

  const totalAmount = ()=>{
    let sum = 0
    cartData.forEach(function(elem){
      sum += elem.price 
    })
    setTotal(sum)
  }

  useEffect(function(){
    totalAmount()
  },[cartData])

  return (
    <div className='p-2'>
      <button onClick={btnClicked} className='bg-green-500 text-white px-4 py-2 rounded'>Get Product Data</button>
      <div className='flex bg-blue-200 p-1'>
        <div className='w-8/12 bg-blue-100 flex gap-2 p-1 flex-wrap'>
          {allProducts.map(function (elem, idx) {

            return <div key={idx} className='bg-white p-2 w-52 text-center rounded'>
              <img className='h-20 mx-auto' src={elem.image} alt="" />

              <h4>${elem.price}</h4>

              <h2 className='h-12 overflow-hidden'>{elem.title}</h2>

              <button
                onClick={() => {
                  addToCartButtonClicked(idx)
                }}
                className='active:scale-95 mt-2 bg-yellow-400 rounded px-4 py-2 text-white'>Add to Cart</button>

            </div>
          })}
        </div>
        <div className='w-4/12 bg-blue-50 p-2'>
          {cartData.map(function (elem, idx) {

            return <div key={idx} className='bg-white items-center justify-between rounded p-2 flex gap-2'>
              <img className='h-16' src={elem.image} alt="" />
              <div>
                <h2 className='text-sm'>{elem.title}</h2>
                <h4>${elem.price}</h4>
              </div>
              <button onClick={()=>{
                cartElementDelete(idx)
              }} className='active:scale-110  bg-red-500 px-2 py-1 text-xl rounded-full text-white'> 
                <i className=" ri-delete-bin-line"></i>
              </button>
            </div>
          })}
        </div>
        <div className='w-80 bg-white p-4 text-xl flex justify-between fixed bottom-4 right-4'>
            <h2>Total Amount - </h2>
            <h3>${total}</h3>
        </div>
      </div>
    </div>
  )
}

export default App