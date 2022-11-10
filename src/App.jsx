import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeContainer from './components/HomeContainer'
import { data } from './DataJsonFile'
import Learn from './pages/Learn'
import Shop from './pages/Shop'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/learn/:id' element={<Learn data={data} />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
