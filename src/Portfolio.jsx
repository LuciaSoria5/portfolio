import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MisRutas } from './router'
import { AppTheme } from './theme/AppTheme'

export const Portfolio = () => {
  return (
    // Aca va el Provider:
    // <Provider store = {store}
    <BrowserRouter>
      <AppTheme>
          <MisRutas />
      </AppTheme>
    </BrowserRouter>
    // </Provider>
  )
}
