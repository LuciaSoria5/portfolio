import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/material'
import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
// import violeta from './fondos/violeta.jpg';
// import rosaVioleta from './fondos/rosaVioleta.jpg';


const imgNavbar = './fondos/violeta.jpg';
const imgFondo = './fondos/rosaVioleta.jpg';

export const MiPortfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración en ms
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
