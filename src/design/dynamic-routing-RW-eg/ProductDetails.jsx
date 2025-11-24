import React from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import { products } from './Data/product';

function ProductDetails() {
  const {id} =useParams();
  const product=products.find((p)=>p.id===Number(id))
  if(!product){

  return <h2 style={{textAlign:'center'}}>product not found</h2>
  }
  return (
    <div className='details-container'>
      {/* left */}
      <div>
        <img src={product.image} 
        alt={product.title}
        className='details-image'
         />
      </div>
    </div>
  )
}

export default ProductDetails