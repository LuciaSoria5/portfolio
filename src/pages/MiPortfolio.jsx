import React, { useEffect, useRef, useState } from 'react'
import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Box } from '@mui/material'

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
    <Box
      className='background'
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        color: 'primary.color',
      }}
    >
      <Navbar posiciones={{ proyectos: proyectosPosicion }} />
      <Presentacion id="presentacion" />
      <SobreMi id="sobreMi" />
      <Tecnologias id="tecnologias" />
      <Proyectos id="proyectos" ref={proyectoRef} />
      <Contacto />
    </Box>
  )
}
