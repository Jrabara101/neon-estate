import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Listings from '../pages/Listings'
import PropertyDetail from '../pages/PropertyDetail'
import Agents from '../pages/Agents'

export default function AppRouter(){
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path='listings' element={<Listings/>} />
        <Route path='property/:id' element={<PropertyDetail/>} />
        <Route path='agents' element={<Agents/>} />
      </Route>
    </Routes>
  )
}
