import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Box } from '@mui/material'

import estrellasRosas from '/fondos/estrellasRosas.gif';
import estrellasAzules from '/fondos/estrellasAzules.gif';
import estrellasRosasImg from '/fondos/estrellasRosasImg.gif';
import brillos from '/fondos/brillos.jpg';
import espacio from '/fondos/espacio.jpg';
import estrellas from '/fondos/estrellas.jpg';
import rosa from '/fondos/rosa.jpg';


const imgNavbar = espacio;
const imgPresentacion = estrellasRosas;
const imgFondo = estrellas;
const imgContacto = estrellas;

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
      <Navbar img={ imgNavbar } />
      <section
        className="animate__animated animate__fadeIn"
        id="presentacion"
        style={{
          // height: '100vh',
          backgroundImage: `url(${imgPresentacion})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Presentacion /> </section>

      <section
        className="animate__animated animate__fadeInLeft"
        id="sobre-mi"
        style={{
          // height: '100vh',
          backgroundImage: `url(${imgFondo})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}>
        <SobreMi id="sobre-mi" /> </section>

      <section
        className="animate__animated animate__fadeInRight"
        id="mas-detalles"
        style={{
          // height: '100vh',
          backgroundImage: `url(${imgFondo})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}>
        <Tecnologias id="tecnologias" /> </section>

      <section
        className="animate__animated animate__fadeInLeft"
        id="proyectos"
        style={{
          // height: '100vh',
          backgroundImage: `url(${imgFondo})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}>
        <Proyectos id="proyectos" /> </section>

      <section
        className="animate__animated animate__fadeIn"
        id="contacto"
        style={{
          // height: '100vh',
          backgroundImage: `url(${imgContacto})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }}>
        <Contacto id="contacto" /> </section>

    </Box>
  )
}
