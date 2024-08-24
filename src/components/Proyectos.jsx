import React from 'react'
import { proyectos } from '../proyectos/data'
import { Proyecto } from './subcomponents/Proyecto';
import { Container } from '@mui/material';

export const Proyectos = () => {

  const listaProyectos = proyectos;

  return (
    <div className="row mt-5 justify-content-center align-items-center">
        <div className="col-6 proyectos" >
            <h2>Mis proyectos</h2>
        </div>
        <Container>
            {
              listaProyectos.map( proyecto => 
                // <div className="col-3">
                  <Proyecto 
                    titulo={ proyecto.titulo } 
                    descripcion={ proyecto.descripcion}
                    repositorio={ proyecto.repositorio}
                    imagen={ proyecto.imagen} 
                  />
                // </div>s
              )
            }
        </Container>
    </div>
  )
}
