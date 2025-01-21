import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { descripcion } from '../info/sobreMi';

export const SobreMi = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas pequeñas

  const [showFullText, setShowFullText] = useState(false);

  const desc = descripcion;

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  }

  return (
    <Box
      sx={{
        // minHeight: '100vh',
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
          // textAlign={isSmallScreen ? 'center' : 'left'}
          textAlign='center'
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
            { // Pantallas pequeñas
              (isSmallScreen)
                ?
                <Box
                  sx={{
                    padding: '16px',
                    color: 'primary.main',
                    backgroundColor: 'grey.grisClaro',
                    borderRadius: '2%'
                  }}
                >
                  <Typography
                    variant='body1'
                    fontSize={20}
                    fontFamily={'Andale Mono, monospace'}
                    sx={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: showFullText ? 'none' : 8,
                    }}
                  >
                    {desc}
                  </Typography>
                  <Button
                    display={showFullText ? false : true}
                    onClick={handleToggleText}
                    sx={{
                      margin: '3px',
                      fontSize: 20,
                      fontFamily: 'Andale Mono, monospace',
                      color: 'primary.main',
                      backgroundColor: 'grey.grisClaro2',
                    }}
                  >
                    { !showFullText
                      ?
                      "Seguir leyendo"
                      :
                      "Ver menos"
                    }
                  </Button>
                </Box>
                // Pantallas grandes
                :
                <Box
                  sx={{
                    padding: '16px',
                    color: 'primary.main',
                    backgroundColor: 'grey.grisClaro',
                    borderRadius: '2%'
                  }}
                >
                  <Typography
                    variant='body1'
                    fontSize={20}
                    fontFamily={'Andale Mono, monospace'}
                    sx={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {desc}
                  </Typography>
                </Box>

            }
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
            src='./img/computadora.png'
            alt='Imagen'
            sx={{
              width: '100%', // Imagen ocupa todo el ancho disponible
              maxWidth: '400px', // Ancho máximo
              height: 'auto', // Mantiene proporciones
              borderRadius: '70%'
            }}
          />
        </Grid>

        {/* <Box
        component='img'
        src='/img/guarda.png'
        alt='Imagen'
        sx={{
          width: '70%', // Imagen ocupa todo el ancho disponible
          maxWidth: '100%', // Ancho máximo
          height: 'auto', // Mantiene proporciones
        }}
      /> */}
      </Grid>
    </Box >
  );
};
