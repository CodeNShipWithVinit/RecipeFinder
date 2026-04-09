import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Favourites from "./pages/Favourites"

const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  )
}

export default App