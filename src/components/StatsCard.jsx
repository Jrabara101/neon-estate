import React from 'react'

export default function StatsCard({ label, value }){
  return (
    <div className='p-5 rounded-2xl glass flex items-center justify-between'>
      <div>
        <p className='text-slate-400 text-sm'>{label}</p>
        <p className='text-2xl font-semibold'>{value}</p>
      </div>
      <div className='h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30'></div>
    </div>
  )
}
