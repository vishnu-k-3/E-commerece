import React from 'react'
import './product.css'
import { useCart } from '../cart/Cart'


function Product({product}) {
  const {addToCart} = useCart();

const handleAddToCart = () => {
    addToCart(product)
  }
  return (
    <>  
        <div className="images">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.prize}</p>
            <button onClick={handleAddToCart}>{product.button}</button>
        </div>
    </>
  )
}

export default Product
