import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material'
import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'

import estrellasRosas from '/fondos/estrellasRosas.gif';

import brillosRosas1 from '/fondos/brillosRosas1.jpg';
import brillosRosas2 from '/fondos/brillosRosas2.jpg';
import brillos from '/fondos/brillos.jpg';
import espacio from '/fondos/espacio.jpg';
import colores from '/fondos/colores.jpg';
import azul from '/fondos/azul.jpg';
import violeta from '/fondos/violeta.jpg';
import fucsia from '/fondos/fucsia.jpg';
import estrellas from '/fondos/estrellas.jpg';
import rosa from '/fondos/rosa.jpg';
import rosaVerde from '/fondos/rosaVerde.jpg';
import rosaVioleta from '/fondos/rosaVioleta.jpg';


const imgNavbar = violeta;
// const imgPresentacion = brillosRosas1;
const imgFondo = rosaVioleta;
// const imgContacto = brillosRosas2;

export const MiPortfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración en ms
      once: false,     // Ejecutar la animación solo una vez
      mirror: false,
    });
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
      style={{
        backgroundImage: `url(${imgFondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar
        styleImg={
          {
            backgroundImage: `url(${imgNavbar})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }
        } />
      <section
        className="animate__animated animate__fadeIn"
        id="presentacion"
      >
        <Presentacion /> </section>

      <section
        data-aos="fade-up"
        // className="animate__animated animate__fadeInLeft"
        id="sobre-mi"
      >
        <SobreMi id="sobre-mi" /> </section>

      <section
        data-aos="fade-up"
        // className="animate__animated animate__fadeInRight"
        id="mas-detalles"
      >
        <Tecnologias id="tecnologias" /> </section>

      <section
        data-aos="fade-up"
        // className="animate__animated animate__fadeInLeft"
        id="proyectos"
      >
        <Proyectos id="proyectos" /> </section>

      <section
        // className="animate__animated animate__fadeIn"
        id="contacto"
      >
        <Contacto id="contacto" /> </section>

    </Box>
  )
}
