import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()

export function FavoritesProvider({ children }){
  const [fav, setFav] = useState(() => new Set(JSON.parse(localStorage.getItem('fav') || '[]')))
  useEffect(()=>{ localStorage.setItem('fav', JSON.stringify(Array.from(fav))) }, [fav])
  const toggle = (id) => setFav(prev => { const n = new Set(prev); n.has(id)? n.delete(id): n.add(id); return n })
  return <FavoritesContext.Provider value={{ fav, toggle }}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => useContext(FavoritesContext)
