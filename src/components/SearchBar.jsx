import React, { useState } from 'react'
import { Combobox, Listbox } from '@headlessui/react'
import { MapPin, Search as SearchIcon, ChevronsUpDown } from 'lucide-react'

export default function SearchBar({ onSearch, locations = [], types = [] }) {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Any')

  return (
    <div className='p-6 rounded-3xl glass'>
      <div className='grid md:grid-cols-5 gap-3'>
        <Combobox value={location} onChange={setLocation}>
          <div className='relative md:col-span-2'>
            <div className='flex items-center gap-2 rounded-2xl glass px-3 py-2'>
              <Combobox.Input
                onChange={(e) => setQuery(e.target.value)}
                displayValue={(v) => v}
                placeholder='Location'
                className='bg-transparent outline-none w-full'
              />
              <MapPin className='h-4 w-4 text-cyan-300' />
            </div>
            <Combobox.Options className='absolute mt-2 w-full glass rounded-2xl p-2 max-h-48 overflow-auto'>
              {locations
                .filter((l) => l.toLowerCase().includes(query.toLowerCase()))
                .map((l) => (
                  <Combobox.Option
                    key={l}
                    value={l}
                    className='cursor-pointer rounded-xl px-3 py-2 hover:bg-white/5'
                  >
                    {l}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </div>
        </Combobox>

        <Listbox value={type} onChange={setType}>
          <div className='relative'>
            <Listbox.Button className='w-full text-left glass rounded-2xl px-3 py-2 flex items-center justify-between'>
              <span>{type}</span>
              <ChevronsUpDown className='h-4 w-4' />
            </Listbox.Button>
            <Listbox.Options className='absolute mt-2 w-56 glass rounded-2xl p-2'>
              {['Any', ...types].map((t) => (
                <Listbox.Option
                  key={t}
                  value={t}
                  className='cursor-pointer rounded-xl px-3 py-2 hover:bg-white/5'
                >
                  {t}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <input
          type='number'
          placeholder='Min ₱'
          className='rounded-2xl glass px-3 py-2'
        />
        <input
          type='number'
          placeholder='Max ₱'
          className='rounded-2xl glass px-3 py-2'
        />
        <button
          onClick={onSearch}
          className='px-4 py-2 rounded-2xl glass neon-btn flex items-center justify-center gap-2'
        >
          <SearchIcon className='h-4 w-4' />
          Search
        </button>
      </div>
    </div>
  )
}
