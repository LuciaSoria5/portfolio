import '@mui/material/styles/styled';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Portfolio } from './Portfolio.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <div className='background'>
      <Portfolio />
    </div>
  // </React.StrictMode>,
)
