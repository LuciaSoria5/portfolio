import React from 'react'

export const Habilidades = () => {
  return (
    <div className="row justify-content-center align-items-center p-3 border bg-light">
        <div className="col-md-4">
            <h1>Habilidades Personales</h1>
        </div>
        <div className="col-md-8 mt-2 text-start" style={{columns: 3}}>
            <ul className="row list-unstyled">
                <li>Trabajo en equipo</li>
                <li>Solución de problemas</li>
                <li>Buena comunicación</li>
                <li>Gestión de equipos</li>
                <li>Liderazgo</li>
                <li>Rápido aprendizaje</li>
                <li>Creatividad y perseverancia</li>
            </ul>
        </div>
    </div>
  )
}
