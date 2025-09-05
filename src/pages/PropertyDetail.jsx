import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { LISTINGS, AGENTS } from '../data/mock'
import { useTransition, animated } from '@react-spring/web'
import { Phone, Mail, Star, BedDouble, Bath, Maximize2 } from 'lucide-react'
import MapComponent from '../components/MapComponent'

export default function PropertyDetail(){
  const { id } = useParams()
  const data = LISTINGS.find(l=> l.id===id) || LISTINGS[0]
  const agent = AGENTS.find(a=> a.id===data.agentId)
  const [img, setImg] = useState(0)
  const t = useTransition(img, { keys: img, from: { opacity:0, transform:'scale(1.02)'}, enter:{opacity:1, transform:'scale(1)'}, leave:{opacity:0, transform:'scale(0.98)'}})

  return (
    <div className='space-y-6'>
      <div className='relative h-72 md:h-96 rounded-3xl overflow-hidden glass'>
        {t((style, i)=> (<animated.img src={data.images[i]} style={style} className='absolute inset-0 h-full w-full object-cover'/>))}
        <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
          {data.images.map((_,i)=> (<button key={i} onClick={()=>setImg(i)} className={`h-2 w-6 rounded-full ${i===img? 'bg-cyan-300':'bg-white/40'}`}/>))}
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6'>
        <div className='p-5 rounded-3xl glass'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-semibold'>{data.title}</h1>
              <div className='text-slate-300 flex items-center gap-3 mt-1'>
                <span className='text-cyan-300 font-bold'>₱{data.price.toLocaleString()}</span>
                <span className='flex items-center gap-1'><BedDouble className='h-4 w-4'/> {data.beds} BR</span>
                <span className='flex items-center gap-1'><Bath className='h-4 w-4'/> {data.baths} BA</span>
                <span className='flex items-center gap-1'><Maximize2 className='h-4 w-4'/> {data.area} sqm</span>
              </div>
            </div>
            <div>
              <button className='px-4 py-2 rounded-xl glass neon-btn border border-cyan-400/30'>Contact Agent</button>
            </div>
          </div>

          <div className='mt-4'>
            <h3 className='font-semibold mb-2'>Description</h3>
            <p className='text-slate-300'>Beautiful {data.type.toLowerCase()} located in {data.location}. Amenities: {data.amenities.join(', ')}.</p>
          </div>

          <div className='mt-4'>
            <h3 className='font-semibold mb-2'>Amenities</h3>
            <div className='flex flex-wrap gap-2'>
              {data.amenities.map(a=> <span key={a} className='px-3 py-1 rounded-full glass'>{a}</span>)}
            </div>
          </div>

          <div className='mt-4'>
            <h3 className='font-semibold mb-2'>Location</h3>
            <div className='aspect-video w-full overflow-hidden rounded-2xl border border-white/10'>
              <MapComponent lat={data.coords.lat} lng={data.coords.lng} />
            </div>
          </div>
        </div>

        <div className='p-5 rounded-3xl glass space-y-4'>
          <div className='flex items-center gap-3'>
            <img src={agent.photo} className='h-16 w-16 rounded-2xl object-cover'/>
            <div>
              <p className='font-semibold'>{agent.name}</p>
              <p className='text-sm text-slate-400'>{agent.title}</p>
              <p className='text-sm flex items-center gap-1 mt-1'><Star className='h-4 w-4 text-yellow-300'/> {agent.rating}</p>
            </div>
          </div>
          <a href={`tel:${agent.phone}`} className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass'><Phone className='h-4 w-4'/> Call</a>
          <a href={`mailto:${agent.email}`} className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl glass'><Mail className='h-4 w-4'/> Email</a>
        </div>
      </div>
    </div>
  )
}
