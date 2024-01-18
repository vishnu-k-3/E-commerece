import './App.css'
import Home from './homePage/Home'
import Cart from './cart/displayCart';
import { CartProvider } from './cart/Cart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <CartProvider>
    <div className='root'>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </CartProvider>
    </Router>
  )
}

export default App
