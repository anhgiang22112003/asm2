import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import HomePage from './pages/homepage'
import Admin from './pages/admin/admin'

import Singup from './pages/sigup'
import Singin from './pages/singin'
import GioHang from './pages/giỏhang'
import DetailProduct from './pages/detailproduct'

import { IProduct, SingupForm } from './model'
import { getAll } from './api/product'
import { singup } from './api/auth'
import ProductUpdate from './pages/product-update'
import Dashboard from './pages/admin/admin'
import { ErrorPage } from './pages/error'
import Add from './pages/admin/add'
import BaseAdmin from './components/layoutadmin/baseAdmin'
import { AdminProduct } from './pages/admin/dasbroad.tsx/dasbroad'


// 1. Khai báo router react-router-dom

function App ()
{
  const user = JSON.parse( sessionStorage.getItem( "user" )! )
  console.log( user?.role );

  const [ product, setProduct ] = useState<IProduct[]>( [] )
  useEffect( () =>
  {
    getAll().then( ( { data } ) => setProduct( data ) )
  }, [] );

  return (

    <Routes>
      <Route path='/' element={ <UserLayout /> } > {/* user layout */ }
        <Route index element={ <HomePage products={ product } /> } />
        <Route path='products/:_id' index element={ <DetailProduct products={ product } /> } ></Route>
        <Route path='/giohang' element={ <GioHang /> } ></Route>
      </Route>

      <Route path='/admin' element={ user?.role === 'Admin' ? ( <BaseAdmin /> ) : ( <ErrorPage /> ) } >
        <Route index element={ <AdminProduct /> } />
        <Route path='admin/dashboard' element={ <BaseAdmin /> } />
        <Route path='add' element={ <Add /> } />
        <Route path='admin/update/:_id' element={ <ProductUpdate /> } />

      </Route>



      <Route path='signup' element={ <Singup /> } ></Route>
      <Route path='login' element={ <Singin /> } ></Route>
    </Routes>

  )
}

export default App
