import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { descripcion } from '../info/sobreMi';

export const SobreMi = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas pequeñas

  const desc = descripcion;

  var cont = 0;
  const getCont = () => {
    cont = cont + 1;
    return cont;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
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
            <Typography 
              variant='h2' 
              component='div' 
              gutterBottom
              sx={{
                fontFamily: 'Georgia, serif',
              }}
            >
              Sobre mí
            </Typography>
            {desc.map(parrafo => (
              <Typography variant='body1' fontSize={20} key={getCont()} fontFamily={'Andale Mono, monospace'}>
                {parrafo}
              </Typography>
            ))}

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
            src='/computadora.png'
            alt='Imagen'
            sx={{
              width: '100%', // Imagen ocupa todo el ancho disponible
              maxWidth: '400px', // Ancho máximo
              height: 'auto', // Mantiene proporciones
              borderRadius: '70%'
            }}
          />
        </Grid>

        <Box
        component='img'
        src='/guarda.png'
        alt='Imagen'
        sx={{
          width: '70%', // Imagen ocupa todo el ancho disponible
          maxWidth: '100%', // Ancho máximo
          height: 'auto', // Mantiene proporciones
        }}
      />
      </Grid>
    </Box>
  );
};
