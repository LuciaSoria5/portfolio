import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MisRutas } from './router'

export const Portfolio = () => {
  return (
    // Aca va el Provider:
    // <Provider store = {store}
    <BrowserRouter>
        <MisRutas />
    </BrowserRouter>
    // </Provider>
  )
}
