import React, { useState, useMemo } from 'react'
import FilterSidebar from '../components/FilterSidebar'
import PropertyCard from '../components/PropertyCard'
import { LISTINGS } from '../data/mock'
import { LOCATIONS, TYPES } from '../utils/constants'
import { useFavorites } from '../features/favorites/FavoritesContext'

export default function Listings(){
  const [filters, setFilters] = useState({ type:'Any', beds:0, baths:0, location:'', price:[0,30000000], sort:'newest'})
  const { fav, toggle } = useFavorites()
  const filtered = useMemo(()=>{
    let data = LISTINGS.filter(l=> (filters.type==='Any' || l.type===filters.type) && (!filters.beds || l.beds>=filters.beds) && (!filters.baths || l.baths>=filters.baths) && (!filters.location || l.location===filters.location) && l.price>=filters.price[0] && l.price<=filters.price[1])
    if(filters.sort==='price-asc') data.sort((a,b)=>a.price-b.price)
    else if(filters.sort==='price-desc') data.sort((a,b)=>b.price-a.price)
    else data.sort((a,b)=>b.createdAt-a.createdAt)
    return data
  }, [filters])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6'>
      <FilterSidebar filters={filters} setFilters={setFilters} locations={LOCATIONS} types={TYPES} />
      <section>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold'>{filtered.length} results</h2>
          <div className='flex items-center gap-2'>
            <select value={filters.sort} onChange={(e)=>setFilters(f=>({...f, sort:e.target.value}))} className='px-3 py-2 rounded-xl glass'>
              <option value='newest'>Newest</option>
              <option value='price-asc'>Price ↑</option>
              <option value='price-desc'>Price ↓</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filtered.map(item => <PropertyCard key={item.id} item={item} onToggleFav={toggle} />)}
        </div>
      </section>
    </div>
  )
}
