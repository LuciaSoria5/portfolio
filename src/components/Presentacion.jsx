import React from 'react'

export const Presentacion = () => {
  return (
    <div className="row mt-5 align-items-center">
        <div className="col-md-6 mt-5">
            <h3 className="titulo">¡Hola! Mi nombre es</h3>
            <h1 className="titulo">Soria Lucía</h1>
            <hr/>
            <ul className="items-descripcion">
                <li>Desarrolladora full stack</li>
                <li>Docente de Programación</li>
            </ul>
        </div>
        <div className="col-md-6">
            <img src="/naruto.png" alt="Imagen"/>
        </div>
    </div>
  )
}
