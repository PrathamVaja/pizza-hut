
import './App.css'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import { Route, Routes } from 'react-router-dom'
import ReserveTable from './Pages/ReserveTable'
import OrderNow from './Pages/OrderNow'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/reserve' element={<ReserveTable/>} />
        <Route path='/order' element={<OrderNow/>} />
      </Routes>

   
    </>
  )
}

export default App
