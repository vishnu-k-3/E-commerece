import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
    <nav className='navi'>
      <Link className='btn-clr' to='/'>Home</Link>
      <button className='btn-clr'>Shop</button>
      <button className='btn-clr'>AboutUs</button>
      <button className='btn-clr'>Blog</button>
      <label htmlFor="btn">
      <input className='txt' type="text" />
      </label>
      <input className='srh' id="btn" type="button" value={'Search'}/>
      <Link className='btn-clr' to='/cart'>Cart</Link>
    </nav>
    </>
  )
}

export default Navigation
