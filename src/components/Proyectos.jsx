import React from 'react'
import { proyectos } from '../proyectos/data'
import { Proyecto } from './subcomponents/Proyecto';
import { Grid } from '@mui/material';

export const Proyectos = () => {

  const listaProyectos = proyectos;

  return (
    <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-6 proyectos" >
            <h2>Mis proyectos</h2>
        </div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }} >
            {
              listaProyectos.map( proyecto => 
                <Grid item md={4} key={ proyecto.titulo }>
                  <Proyecto 
                    titulo={ proyecto.titulo } 
                    descripcion={ proyecto.descripcion}
                    repositorio={ proyecto.repositorio}
                    imagen={ proyecto.imagen} 
                  />
                </Grid>
              )
            }
        </Grid>
    </div>
  )
}
