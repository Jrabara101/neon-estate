import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Home, Filter } from 'lucide-react'

export default function Navbar(){
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className='sticky top-0 z-40 glass border-b border-white/10'>
      <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-2'>
          <Home className='h-6 w-6 text-cyan-400'/>
          <span className='font-semibold tracking-wide'>NeonEstate</span>
        </Link>
        <div className='hidden md:flex items-center gap-2'>
          <Link to='/' className='px-3 py-2 rounded-xl glass'>Home</Link>
          <Link to='/listings' className='px-3 py-2 rounded-xl glass'>Listings</Link>
          <Link to='/agents' className='px-3 py-2 rounded-xl glass'>Agents</Link>
          <button onClick={()=>navigate('/listings')} className='ml-4 px-4 py-2 rounded-xl glass neon-btn border border-cyan-400/30'>Browse</button>
        </div>
        <button className='md:hidden p-2 rounded-xl border border-white/10' onClick={()=>setOpen(prev=>!prev)}>
          <Filter className='h-5 w-5'/>
        </button>
      </div>
    </nav>
  )
}
