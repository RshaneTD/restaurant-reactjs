import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import SharedNav from '../components/Header'
import ShareFooter from '../components/Footer'

import About from '../pages/About'
import Drinks from '../pages/Drinks'
import Home from '../pages/Home'
import IceCream from '../pages/IceCream'
import Menu from '../pages/Menu'
import Training from '../pages/Training'
import Test from '../tested/test'


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route defer path='/' element={<SharedNav /> }>
          <Route index element={<Home />}/>
            <Route path='main' element={<Menu />}/>
            <Route path='Test' element={<Test />}/>
            <Route path='main' element={<Menu/>}/>
       
            <Route path='Training' element={<Training />}/>
            <Route path='About' element={<About />}/>
            
            
            <Route path='/Drinks' element={<Drinks />}/>
            <Route path='/IceCream' element={<IceCream />}/>
            <Route path='/Menu' element={<Menu />}/> 
        </Route>
      </Routes>
    </BrowserRouter>

 
    
  )
}

export default App

function Contact(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />}>
              <Route path='menu' element={<menu/>}/>
            </Route>

            <Route path='about' element={<About />} />
  
            <Route path='products' element={<SharedProductLayout />}>
              <Route index element={<Products />} />
              <Route path=':productId' element={<SingleProduct />} />
            </Route>
  
            <Route path='login' element={<Login setUser={setUser}></Login>} />
            <Route
              path='dashboard'
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}