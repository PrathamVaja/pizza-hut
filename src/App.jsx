
import './App.css'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import { Route, Routes } from 'react-router-dom'
import ReserveTable from './Pages/ReserveTable'
import OrderNow from './Pages/OrderNow'
import CartPage from './Pages/CartPage'




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/reserve' element={<ReserveTable/>} />
        <Route path='/order' element={<OrderNow/>} />
        <Route path='/cart' element={<CartPage/>} />
       
      
      </Routes>

   
    </>
  )
}

export default App
