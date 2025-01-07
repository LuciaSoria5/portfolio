import { forwardRef } from 'react';
import { proyectos } from '../info';
import { Proyecto } from './subcomponents';
import { Grid, Typography } from '@mui/material';

export const Proyectos = forwardRef((props, ref) => {

  const listaProyectos = proyectos;

  return (
    <Grid 
      ref={ref}
      container
      direction="column" 
      // mt={3}
      justifyContent="center"
      sx={{ 
        flexGrow: 1, 
        backgroundColor: 'primary.main', 
        color: 'primary.color',
        padding: 3,
      }}
      spacing={2}
    >
      <Grid item xs={12} sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h3" component="div">
          Mis proyectos
        </Typography>            
      </Grid>

      <Grid 
        container
        justifyContent="center" /* Centrar proyectos horizontalmente */
        spacing={3} /* Espacio entre proyectos */
        sx={{ 
          padding: '24px', // Espacio alrededor de todo el contenido
        }}
        
      >
        {listaProyectos.map(proyecto => (
          <Grid 
            item 
            xs={12} sm={6} md={4} lg={3} /* Tamaños responsivos */
            key={proyecto.titulo}
          >
            <Proyecto 
              titulo={proyecto.titulo} 
              descripcion={proyecto.descripcion}
              repositorio={proyecto.repositorio}
              imagen={proyecto.imagen} 
              sitio={proyecto.sitio}
              git={proyecto.git}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});
