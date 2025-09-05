import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, MapPin, BedDouble, Bath, Maximize2 } from 'lucide-react'
import { useSpring, animated } from '@react-spring/web'

export default function PropertyCard({ item, wide=false, onToggleFav }){
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const anim = useSpring({ transform: hovered? 'scale(1.03)' : 'scale(1)', boxShadow: hovered? '0px 0px 35px rgba(56,189,248,0.55)' : '0px 0px 20px rgba(59,130,246,0.35)' })

  return (
    <animated.div style={anim} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} className={`group cursor-pointer glass border border-white/10 rounded-2xl overflow-hidden ${wide? 'grid grid-cols-[280px_1fr]':''}`} onClick={()=>navigate(`/property/${item.id}`)}>
      <div className='relative'>
        <img src={item.images[0]} alt={item.title} className={`${wide? 'h-full object-cover':'h-48 object-cover'} w-full`} />
        <div className='absolute top-2 left-2 px-2 py-1 rounded-lg bg-black/50 text-xs'>{item.type}</div>
        <button onClick={(e)=>{e.stopPropagation(); onToggleFav && onToggleFav(item.id)}} className='absolute top-2 right-2 p-2 rounded-full glass neon-btn'>
          <Heart className='h-4 w-4'/>
        </button>
      </div>
      <div className='p-4 space-y-2'>
        <h3 className='font-semibold leading-tight'>{item.title}</h3>
        <p className='text-cyan-300 font-bold'>₱{item.price.toLocaleString()}</p>
        <div className='flex items-center gap-4 text-sm text-slate-300'>
          <span className='flex items-center gap-1'><BedDouble className='h-4 w-4'/> {item.beds} BR</span>
          <span className='flex items-center gap-1'><Bath className='h-4 w-4'/> {item.baths} BA</span>
          <span className='flex items-center gap-1'><Maximize2 className='h-4 w-4'/> {item.area} sqm</span>
        </div>
        <div className='flex items-center gap-2 text-sm text-slate-400'><MapPin className='h-4 w-4'/> {item.location}</div>
        <div className='pt-2'>
          <button className='px-3 py-2 rounded-xl glass neon-btn border border-cyan-400/30'>View Details</button>
        </div>
      </div>
    </animated.div>
  )
}
