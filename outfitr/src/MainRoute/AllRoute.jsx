import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import AdminPage from '../Pages/AdminPage'
import CartPage from '../Pages/CartPage'
import Homepage from '../Pages/Homepage'
import Payment from '../Pages/Payment'
import Productpage from '../Pages/productpage'
import Register from '../Pages/Register'
import SingleProductPage from '../Pages/SingleProductPage'
import Productpagef from '../Pages/productpagef'
import MensHomepage from '../Pages/MensHomepage'

const AllRoute = () => {
  return (
    <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/mensProduct' element={<MensHomepage/>}></Route>
       {/* <Route path='/womensProduct' element={<Productpage/>}></Route> */}
       <Route path='/product' element={<Productpage/>}></Route>
       <Route path='/singleproducts/:id/:gender' element={<SingleProductPage/>}></Route>
       <Route path='/cartPage' element={<CartPage/>}></Route>
       <Route path='/payment' element={<Payment/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/adminPage' element={<AdminPage/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
       <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
  )
}

export default AllRoute
