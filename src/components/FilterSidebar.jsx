import React from 'react'
import { Listbox } from '@headlessui/react'

export default function FilterSidebar({ filters, setFilters, locations = [], types = [] }){
  return (
    <aside className='p-4 rounded-2xl glass'>
      <h3 className='font-semibold mb-3'>Filters</h3>
      <div className='space-y-3'>
        <div>
          <label className='text-sm text-slate-400 block mb-1'>Type</label>
          <Listbox value={filters.type} onChange={(v)=>setFilters(f=>({...f, type:v}))}>
            <Listbox.Button className='w-full text-left glass rounded-xl px-3 py-2'>{filters.type}</Listbox.Button>
            <Listbox.Options className='mt-2 glass rounded-2xl p-2'>
              {(['Any', ...types]).map(t=> (<Listbox.Option key={t} value={t} className='px-3 py-2 rounded-xl'>{t}</Listbox.Option>))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div>
          <label className='text-sm text-slate-400 block mb-1'>Bedrooms ≥</label>
          <input type='number' min={0} value={filters.beds} onChange={(e)=>setFilters(f=>({...f, beds: Number(e.target.value)||0}))} className='w-full px-3 py-2 rounded-xl glass' />
        </div>
        <div>
          <label className='text-sm text-slate-400 block mb-1'>Bathrooms ≥</label>
          <input type='number' min={0} value={filters.baths} onChange={(e)=>setFilters(f=>({...f, baths: Number(e.target.value)||0}))} className='w-full px-3 py-2 rounded-xl glass' />
        </div>
        <div>
          <label className='text-sm text-slate-400 block mb-1'>Location</label>
          <select value={filters.location} onChange={(e)=>setFilters(f=>({...f, location:e.target.value}))} className='w-full px-3 py-2 rounded-xl glass'>
            <option value=''>Any</option>
            {locations.map(l=> <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>
    </aside>
  )
}
