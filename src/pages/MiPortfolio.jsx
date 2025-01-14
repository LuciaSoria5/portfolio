import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Box } from '@mui/material'

import brillosRosas from '/fondos/brillosRosas.gif';

export const MiPortfolio = () => {

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
      <Navbar />
      <section 
        className= "animate__animated animate__fadeIn" 
        id="presentacion"
        style= {{
          // height: '100vh',
          backgroundImage: `url(${brillosRosas})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        >
          <Presentacion/ > </section>
      <section className= "animate__animated animate__fadeInLeft" id="sobre-mi"> <SobreMi id="sobre-mi" /> </section>
      <section className= "animate__animated animate__fadeInRight" id="mas-detalles"><Tecnologias id="tecnologias" /> </section>
      <section className= "animate__animated animate__fadeInLeft" id="proyectos"><Proyectos id="proyectos"/> </section>
      <section className= "animate__animated animate__fadeIn" id="contacto"><Contacto id="contacto" /> </section>
    </Box>
  )
}
