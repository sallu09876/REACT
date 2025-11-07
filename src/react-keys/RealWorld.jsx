import React from 'react'

const RealWorld = () => {

    const products = [
        {id:'p1', name:'t-shirt'},
        {id:'p2', name:'hoddie'},
        {id:'p3', name:'jacket'},
        {id:'p4', name:'shirt'}
    ]
  return (
    <div>
      <ul>
        {products.map(prdt => (
            <li key={prdt.id}>{prdt.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealWorld
