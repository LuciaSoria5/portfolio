import { Grid } from '@mui/material';
import { Habilidades, EnumItems } from './subcomponents'
import { personales, tecnicos, experiencia, educacion } from '../info';

export const Tecnologias = () => {
    //justify-content-center align-items-center
  return (
    <Grid 
      className="accordion  col-10" 
      id="accordion"
      container
      direction="column" 
    //   mt={3}
      justifyContent="center"
      sx={{ 
        flexGrow: 1, 
        backgroundColor: 'primary.main', 
        color: 'primary.color',
        padding: 3,
      }}
    >
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h3>Conocimientos tecnicos</h3>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion" >
                    <div className="accordion-body">
                          <EnumItems json={ tecnicos }/>                                                   
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3>Habilidades personales</h3>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <Habilidades />
                        {/* <EnumItems json={ personales } /> */}
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h3>Experiencia</h3>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                        <EnumItems json={ experiencia } />
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h3>Formación Académica</h3>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    <EnumItems json={ educacion } />
                    </div>
                </div>
            </div>
    </Grid>
  )
}