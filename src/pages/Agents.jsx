import React from 'react'
import AgentCard from '../components/AgentCard'
import { AGENTS, LISTINGS } from '../data/mock'

export default function Agents(){
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Our Agents</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {AGENTS.map(a=> (
          <div key={a.id} className='p-5 rounded-3xl glass'>
            <AgentCard agent={a}>
              <p className='text-slate-300'>Specializes in prime city properties and family homes.</p>
              <div className='mt-3 grid grid-cols-1 md:grid-cols-2 gap-3'>
                {LISTINGS.filter(l=> l.agentId===a.id).map(l=> <div key={l.id}><a href={`/property/${l.id}`} className='block'>{l.title}</a></div>)}
              </div>
            </AgentCard>
          </div>
        ))}
      </div>
    </div>
  )
}
