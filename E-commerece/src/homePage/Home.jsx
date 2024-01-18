import React from 'react'
import './home.css'
import Navigation from '../navigation/Navigation'
import items from '../products/Array'
import Product from '../products/Product'
import { useCart } from '../cart/Cart'

function Home() {
  const {state} = useCart();
  console.log('cart:', state)
  return (
    <>
    <div className='name'>
      <h1>Watch WareHouse</h1>
      <Navigation />
      <img src="src/assets/homePage/christian-wiediger-pooVzgc3y6k-unsplash.jpg" alt="" />
    </div>
    <div>
    <h2 className='product'>SHOP</h2>
    <hr className='line'/>
    </div>
    <div>
      {items.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    <div className="about">
    <hr className='line' />
    <div className='contact'>
    <h3>CONTACT</h3>
    <div>
    <p>E-mail: watchwarehouse@gmail.com</p>
    <p>Phone: 9843332256</p>
    </div>
    </div>
    <div className="contact">
    <h3 >INFORMATION</h3>
    <div><p>Terms & Conditions</p></div>
    </div>
    
    </div>
    </>
  )
}

export default Home
