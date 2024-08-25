import React from 'react'

export const Educacion = () => {
  return (
    <div className="row justify-content-center align-items-center p-3 border bg-light">
        <div className="col-md-4">
            <h1>Formación Académica</h1>
        </div>
        <div className="col-md-8 mt-2 text-start">
            <ul>
                <li>
                    <h4>Licenciatura en Sistemas</h4>
                    <ul>
                        <li>Universidad Nacional de General Sarmiento</li>
                        <li>Marzo 2020 - En curso</li>
                    </ul>
                </li>
                <li>
                    <h4>Tecnicatura Superior en Informática</h4>
                    <ul>
                        <li>Universidad Nacional de General Sarmiento</li>
                        <li>Marzo 2020 - Julio 2023</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}
