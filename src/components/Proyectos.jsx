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
        >
          <Typography 
            variant="h3" 
            noWrap 
            component="div"
          >
            Mis proyectos
          </Typography>
        {/* </Grid> */}
        <Grid 
          container 
          rowSpacing={2} 
          columnSpacing={{ xs: 1, sm: 1, md: 2 }} 
          justifyContent="center"
          alignItems="center"
        >
            {
              listaProyectos.map( proyecto => 
                <Grid item md={4} key={ proyecto.titulo }>
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
