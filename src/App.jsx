
import './App.css'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>

   
    </>
  )
}

export default App
