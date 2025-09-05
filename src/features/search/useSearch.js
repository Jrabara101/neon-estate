import { useState } from 'react'
export default function useSearch(initial=''){
  const [q, setQ] = useState(initial)
  const onChange = (v)=> setQ(v)
  return { q, setQ, onChange }
}
