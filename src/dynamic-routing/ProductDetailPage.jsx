import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBoxOpen } from "react-icons/fa6";

const ProductDetailPage = () => {

    const {id} = useParams(); //a hook provided by react router dom to extract datas from db

  return (
    <div>
      <h2><FaBoxOpen />Product id : {id} </h2>
    </div>
  )
}

export default ProductDetailPage
