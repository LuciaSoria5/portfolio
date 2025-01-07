import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

export const SobreMi = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas pequeñas

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
        maxWidth: '1200px', // Ancho máximo para pantallas grandes
        margin: '0 auto', // Centra horizontalmente el contenedor principal
      }}
    >
      <Grid
        container
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
        spacing={3} // Espaciado entre elementos
      >
        {/* Texto */}
        <Grid
          item
          xs={12}
          md={8}
          justifyContent='center'
          alignItems='center'
          textAlign={isSmallScreen ? 'center' : 'left'}
        >
          <Box sx={{ padding: '16px' }}>
            <Typography variant='h2' component='div' gutterBottom>
              Sobre mí
            </Typography>
            <Typography variant='body1' fontSize={20}>
              Soy una estudiante de Sistemas con una gran pasión por la tecnología y el desarrollo de software. Soy segura de mí misma, responsable, organizada, y siempre me enfoco en alcanzar mis objetivos.
              <br />
              Con determinación y creatividad, logré no sólo sobresalir en mis estudios, sino también disfrutar cada paso del camino.
              <br />
              Tengo sólidos conocimientos en programación, bases de datos, y testing. Además, gracias a mi experiencia, puedo comunicar ideas de manera efectiva, tanto en proyectos individuales como en equipo.
              Siempre busco sumar al grupo, ya sea aportando ideas o ayudando a otros a alcanzar su máximo potencial.
              <br />
              Estoy convencida de que la clave del éxito está en la combinación de esfuerzo y pasión, y eso es algo que aplico en todo lo que hago.
              <br />
              Estoy emocionada por lo que el futuro me depara, y estoy lista para seguir creciendo y aprendiendo.
            </Typography>
          </Box>
        </Grid>

        {/* Imagen */}
        <Grid
          item
          xs={12}
          md={4}
          justifyContent='center'
          alignItems='center'
        >
          <Box
            component='img'
            src='/naruto.png'
            alt='Imagen'
            sx={{
              width: '100%', // Imagen ocupa todo el ancho disponible
              maxWidth: '400px', // Ancho máximo
              height: 'auto', // Mantiene proporciones
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
