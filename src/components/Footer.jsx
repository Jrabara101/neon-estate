import React from 'react'

export default function Footer(){
  return (
    <footer className='mx-auto max-w-7xl px-4 py-12 text-center text-slate-400'>
      © {new Date().getFullYear()} NeonEstate · Built with React, Tailwind, Headless UI, React Spring
    </footer>
  )
}
