import { Contacto, Navbar, Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'
import { Box } from '@mui/material'

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
      <section id="presentacion"><Presentacion/> </section>
      <section id="sobre-mi"> <SobreMi id="sobre-mi" /> </section>
      <section id="tecnologias"><Tecnologias id="tecnologias" /> </section>
      <section id="proyectos"><Proyectos id="proyectos"/> </section>
      <section id="contacto"><Contacto id="contacto" /> </section>
    </Box>
  )
}
