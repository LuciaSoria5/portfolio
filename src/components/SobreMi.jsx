import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const SobreMi = () => {
  return (
    <Grid 
    // className="row mt-5 justify-content-center align-items-center"
      container
      direction="row" 
      mt={1}
      // ml={5}
      justifyContent="center"
      alignItems="center"
      display='flex'
      wrap="nowrap"
      sx={{ flexGrow: 1, backgroundColor: 'primary.main', color: 'primary.color',}}
      spacing={5}
    >

      <Box
        component="img"
        src="/naruto.png"
        alt="Imagen"
        sx={{
          width: '40%',
          height: 'auto',
          maxWidth: '100%', // Asegura que la imagen no se haga más grande que su contenedor
        }}
      />

      <Grid item xs={12} md={6} sx={{ textAlign: 'center'}} >
        <Typography variant="h2" component="div">
          Sobre mi
        </Typography>
        <Typography variant="body1" component="div" fontSize={ 20 }>
          Soy una estudiante de Sistemas con una gran pasión por la tecnología y el desarrollo de software. Soy egura de mí misma, responsable, organizada, y siempre me enfoco en alcanzar mis objetivos. 
          Con determinación y creatividad, logré no sólo sobresalir en mis estudios, sino también disfrutar cada paso del camino.
          <br/>
          Tengo sólidos conocimientos en programación, bases de datos, y testing. Además, gracias a mi experiencia, puedo comunicar ideas de manera efectiva, tanto en proyectos individuales como en equipo. 
          Siempre busco sumar al grupo, ya sea aportando ideas o ayudando a otros a alcanzar su máximo potencial. 
          <br/>
          Estoy convencida de que la clave del éxito está en la combinación de esfuerzo y pasión, y eso es algo que aplico en todo lo que hago.
          <br/>
          Estoy emocionada por lo que el futuro me depara, y estoy lista para seguir creciendo y aprendiendo.
        </Typography>
      </Grid>
    </Grid>
  )
}
