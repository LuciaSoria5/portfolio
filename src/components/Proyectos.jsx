import { forwardRef } from 'react';
import { proyectos } from '../proyectos/data'
import { Proyecto } from './subcomponents/Proyecto';
import { Grid, Typography } from '@mui/material';

export const Proyectos = forwardRef((props, ref) => {

  const listaProyectos = proyectos;

  return (
    <div ref= { ref }>
    {/* <> */}
        <Grid 
          // ref={ ref }
          container
          direction="row" 
          mt={3}
          // ml={10}
          justifyContent="center"
          // alignItems="center"
          // display='flex'
          wrap="nowrap"
          sx={{ flexGrow: 1 }}
          spacing={2}
        >
          <Typography variant="h3" component="div">
            Mis proyectos
          </Typography>
        </Grid>
        <Grid 
          container
          direction="row" 
          rowSpacing={1} 
          mt={1}
          mb={0}
          ml={5}
          justifyContent="center"
          alignItems="top"
          display='flex'
          // wrap="nowrap"
          sx={{ flexGrow: 1 }}
          spacing={1}
        >
          {
            listaProyectos.map( proyecto => 
              <Grid 
                item
                xs={12} sm={12} md={4} lg={4}
                // xs={12} 
                mt={2}
                justifyContent="center"
                alignItems="center"
                sx={{ flexGrow: 1 }}
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
    </div>
  )
});
