import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Educacion, Habilidades, Tecnologias as Tecnologias2 } from './subcomponents'
import { Experiencia } from './Experiencia';

export const Tecnologias = () => {
    //justify-content-center align-items-center
  return (
    <div className="accordion mt-5 " id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Tecnologías
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <Tecnologias2 />
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Habilidades personales
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <Habilidades />
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                Experiencia
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <Experiencia />
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Formación Académica
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" >
                <div className="accordion-body">
                    <Educacion />
                </div>
            </div>
        </div>
    </div>
  )
}