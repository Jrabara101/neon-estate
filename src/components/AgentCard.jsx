import React from 'react'
import { Star } from 'lucide-react'

export default function AgentCard({ agent, children }){
  return (
    <div className='p-4 rounded-2xl glass'>
      <div className='flex items-center gap-3'>
        <img src={agent.photo} alt={agent.name} className='h-16 w-16 rounded-2xl object-cover' />
        <div>
          <p className='font-semibold'>{agent.name}</p>
          <p className='text-sm text-slate-400'>{agent.title}</p>
          <p className='text-sm flex items-center gap-1 mt-1'><Star className='h-4 w-4 text-yellow-300'/> {agent.rating}</p>
        </div>
      </div>
      <div className='mt-3'>
        {children}
      </div>
    </div>
  )
}
