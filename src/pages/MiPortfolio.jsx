import React from 'react'
import { Contacto, Experiencia, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Grid } from '@mui/material'

export const MiPortfolio = () => {
  return (
    <Grid 
      className="container text-center" 
      style={{"height": "100vh"}} 
      sx={{ 
        backgroundColor: 'primary.main', 
        color: 'primary.color',
      }}
    >
        <Navbar id="navbar"/>
        <Presentacion id="presentacion" />
        <SobreMi id="sobreMi" />
        <Tecnologias id="tecnologias" />
        <Experiencia />
        <Proyectos id="proyectos" />
        <Contacto />
    </Grid>
  )
}
