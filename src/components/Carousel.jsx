import React, { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

export default function Carousel({ images = [] }){
  const [idx, setIdx] = useState(0)
  const t = useTransition(idx, {
    keys: idx,
    from: { opacity: 0, transform: 'translate3d(0,10px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-10px,0)' }
  })

  return (
    <div className='relative rounded-3xl overflow-hidden'>
      {t((style, i) => (
        <animated.img src={images[i]} style={style} className='w-full h-72 object-cover'/>
      ))}
      <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_,i)=> (
          <button key={i} onClick={()=>setIdx(i)} className={`h-2 w-6 rounded-full ${i===idx? 'bg-cyan-300':'bg-white/40'}`}></button>
        ))}
      </div>
    </div>
  )
}
