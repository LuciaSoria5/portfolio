import React from 'react'

export const Experiencia = () => {
  return (
    <div className="row justify-content-center align-items-center p-3 border bg-light">
        <div className="col-md-4">
            <h1>Experiencia</h1>
        </div>
        <div className="col-md-8 mt-2 text-start">
            <ul>
                <li>
                    <h4>Docente de Programación</h4>
                    <ul>
                        <li>Universidad Nacional de General Sarmiento</li>
                        <li>Marzo 2020 - Actualidad</li>
                        <li>Introducción a Python</li>
                        <li>Herramientas de control de versiones</li>
                    </ul>
                </li>
                <li>
                    <h4>Desarrolladora Backend</h4>
                    <ul>
                        <li>Universidad Nacional de General Sarmiento</li>
                        <li>Práctica Profesional Universitaria: Marzo 2023 - Julio 2023</li>
                        <li>Django</li>
                        <li>SQLite</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
