import { forwardRef } from 'react';
import { proyectos } from '../proyectos/data'
import { Proyecto } from './subcomponents/Proyecto';
import { Grid, Typography } from '@mui/material';

export const Proyectos = forwardRef((props, ref) => {

  const listaProyectos = proyectos;

  return (
    // <div ref= { ref }>
    <Grid 
        ref={ ref }
          container 
          direction="row" 
          justifyContent="center"
          alignItems="center"
          mt={5}
          ml={5}
          display='flex'
          sx={{ flexGrow: 1 }}
        >
          <Typography variant="h3" component="div">
            Mis proyectos
          </Typography>
        <Grid 
          container 
          rowSpacing={2} 
          columnSpacing={2} 
          justifyContent="center"
          alignItems="top"
        >
            {
              listaProyectos.map( proyecto => 
                <Grid 
                  item 
                  sm={3} md={4} lg={3}
                  mt={2}
                  key={ proyecto.titulo }
                >
                  <Proyecto 
                    titulo={ proyecto.titulo } 
                    descripcion={ proyecto.descripcion}
                    repositorio={ proyecto.repositorio}
                    imagen={ proyecto.imagen} 
                    sitio={ proyecto.sitio }
                  />
                </Grid>
              )
            }
        </Grid>
    </Grid>
  )
});
