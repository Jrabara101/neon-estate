import React from 'react'
import SearchBar from '../components/SearchBar'
import Carousel from '../components/Carousel'
import StatsCard from '../components/StatsCard'
import PropertyCard from '../components/PropertyCard'
import { LISTINGS } from '../data/mock'
import { LOCATIONS, TYPES } from '../utils/constants'

export default function Home(){
  const featured = LISTINGS.slice(0,3)
  const stats = { total: LISTINGS.length, agents: 3, recent: LISTINGS.filter(l=> Date.now()-l.createdAt < 1000*60*60*24*3).length }
  return (
    <div className='space-y-12'>
      <section className='p-6 md:p-10 rounded-3xl glass'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>Find your next <span className='text-cyan-400'>home</span> in minutes.</h1>
            <p className='mt-3 text-slate-300 max-w-xl'>Search condos, houses, and lots across prime Philippine locations.</p>
            <div className='mt-6'>
              <SearchBar locations={LOCATIONS} types={TYPES} onSearch={()=>{}} />
            </div>
          </div>
          <div className='flex-1'>
            <Carousel images={featured.flatMap(f=>f.images)} />
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <StatsCard label='Total Listings' value={stats.total} />
        <StatsCard label='Agents' value={stats.agents} />
        <StatsCard label='Recent (3 days)' value={stats.recent} />
      </section>

      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold'>Featured</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {featured.map(f=> <PropertyCard key={f.id} item={f} />)}
        </div>
      </section>
    </div>
  )
}
