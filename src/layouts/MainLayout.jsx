import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout(){
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100'>
      <Navbar />
      <main className='mx-auto max-w-7xl px-4 py-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
