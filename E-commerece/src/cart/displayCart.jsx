import React from 'react'
import { useCart } from './Cart'
import './cart.css'

const Cart = () => {
  const { state, removeFromCart } = useCart()

  if (!state || !Array.isArray(state.items)) {
    return <p>Invalid state in the cart</p>;
  }

  const handleRemoveFromCart = (product) => {
    removeFromCart(product)
}

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {state.items.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{`ID: ${product.id}`}</p>
              <p>{`Name: ${product.name}`}</p>
              <p>{`Price: $${product.prize ? product.prize : 'N/A'}`}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
