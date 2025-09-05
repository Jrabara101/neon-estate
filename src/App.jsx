import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import { FavoritesProvider } from './features/favorites/FavoritesContext'
import AppContextProvider from './context/AppContext'

export default function App(){
  return (
    <BrowserRouter>
      <AppContextProvider>
        <FavoritesProvider>
          <AppRouter />
        </FavoritesProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}
