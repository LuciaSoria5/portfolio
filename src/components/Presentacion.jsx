import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Presentacion = () => {
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
        mt={7}
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      // spacing={1} // Espaciado entre elementos
      >
        {/* Texto */}
        <Grid
          item
          xs={12}
          md={7}
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <Box sx={{ padding: '16px' }}>
            <Typography 
              variant="h3" 
              component="div"
              sx={{
                fontFamily: 'Georgia, serif',
              }}
            >
              Mi nombre es
            </Typography>
            <Typography 
              variant="h1" 
              component="div" 
              padding='24px'
              sx={{
                fontFamily: 'Georgia, serif',
              }}
            >
              Lucía Soria
            </Typography>
          </Box>

          <Box
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              }}
            >
            <List>
              <ListItem >
                <ListItemIcon>
                  <FavoriteIcon fontSize="large" sx={{ color: "primary.color" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Desarrolladora Fullstack"
                  primaryTypographyProps={{ variant: 'h4', fontFamily: 'Georgia, serif', }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FavoriteIcon fontSize="large" sx={{ color: "primary.color" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Docente de Sistemas"
                  primaryTypographyProps={{ variant: 'h4', fontFamily: 'Georgia, serif', }}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Imagen */}
        <Grid
          item
          xs={12}
          md={5}
          justifyContent='center'
          alignItems='center'
        >
          <Box
            component='img'
            src='/chica.png'
            alt='Imagen'
            sx={{
              width: '100%', // Imagen ocupa todo el ancho disponible
              maxWidth: '100%', // Ancho máximo
              height: 'auto', // Mantiene proporciones
              borderRadius: '50%',
              // width: '30%',
              // height: 'auto',
              // maxWidth: '100%',
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
  )
}
