import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Contacto, Experiencia, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Grid } from '@mui/material'
import { Navbar2 } from '../components/Navbar2';

export const MiPortfolio = () => {

  const proyectoRef = useRef();
  const [proyectosPosicion, setProyectosPosicion] = useState();

  useEffect(() => {
    if (proyectoRef.current) {
      const rect = proyectoRef.current.getBoundingClientRect();
      setProyectosPosicion({
        top: rect.top - 50,
        left: rect.left,
      });
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
      {/* <Navbar id="navbar" posiciones={{ proyectos: proyectosPosicion }}/> */}
      <Navbar2 posiciones={{ proyectos: proyectosPosicion }} />
      <Presentacion id="presentacion" />
      <SobreMi id="sobreMi" />
      <Tecnologias id="tecnologias" />
      <Proyectos id="proyectos" ref={ proyectoRef }/>
      <Contacto />
    </Grid>
  )
}
