import React from 'react'
import { Presentacion, Proyectos, SobreMi, Tecnologias } from '../components'

export const MiPortfolio = () => {
  return (
    <div className="container text-center" style={{"height": "100vh"}} >
        <Presentacion id="presentacion" />
        <SobreMi id="sobreMi" />
        <Tecnologias id="tecnologias" />
        <Proyectos id="proyectos" />
    </div>
  )
}
