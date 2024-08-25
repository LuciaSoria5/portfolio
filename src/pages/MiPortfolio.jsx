import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Contacto, Experiencia, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Grid } from '@mui/material'

export const MiPortfolio = () => {

  
  const proyectoRef = useRef();
  const [proyectosPosicion, setProyectosPosicion] = useState();

  useEffect(() => {
    if (proyectoRef.current) {
      const rect = proyectoRef.current.getBoundingClientRect();
      setProyectosPosicion({
        top: rect.top,
        left: rect.left,
      });
      console.log(proyectosPosicion)
    }
  }, []);


  return (
    <Grid 
    container 
    direction="row" 
    justifyContent="center"
    alignItems="center"
    width="100%"
    sx={{ 
      // backgroundColor: 'primary.main', 
      color: 'primary.color',
      mt: 7
    }}
  >
    {/* <Grid 
      className="container text-center" 
      style={{"height": "100vh"}} 

    > */}
        <Navbar id="navbar" posiciones={{ proyectos: proyectosPosicion }}/>
        <Presentacion id="presentacion" />
        <SobreMi id="sobreMi" />
        <Tecnologias id="tecnologias" />
        <Proyectos id="proyectos" ref={ proyectoRef }/>
        <Contacto />
    </Grid>
  )
}
