import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export default function AppContextProvider({ children }){
  const [filters, setFilters] = useState({ type: 'Any', beds:0, baths:0, location: '', price: [0,30000000], sort: 'newest' })
  const value = { filters, setFilters }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
