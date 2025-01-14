import { Box, Grid, Typography } from '@mui/material';
import { Habilidades, EnumItems } from './subcomponents'
import { personales, tecnicos, experiencia, educacion } from '../info';

export const Tecnologias = () => {
    return (
        <Grid
            className="accordion  col-10"
            id="accordion"
            container
            direction="column"
            justifyContent="center"
            sx={{
                flexGrow: 1,
            }}
        >
            <Box
                sx={{
                    display: 'block', // Necesario para centrar con margin
                    margin: '0 auto', // Centra horizontalmente}
                }}
            >
                <Typography 
                    variant='h2' 
                    component='div' 
                    gutterBottom
                    sx={{
                        fontFamily: 'Georgia, serif',
                        textAlign: 'center'
                    }}
                >
                   Más detalles
                </Typography>
            </Box>
            <Box
                sx={{
                     paddingLeft: '40px',
                     paddingRight: '40px',
                }}
                >
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <h3>Conocimientos tecnicos</h3>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion" >
                    <div className="accordion-body">
                        <EnumItems json={tecnicos} />
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
                        <EnumItems json={experiencia} />
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
                        <EnumItems json={educacion} />
                    </div>
                </div>
            </div>
            </Box>
            {/* <Box
                component='img'
                src='/guarda.png'
                alt='Imagen'
                sx={{
                    width: '48%', // Imagen ocupa todo el ancho disponible
                    maxWidth: '100%', // Ancho máximo
                    height: 'auto', // Mantiene proporciones
                    display: 'block', // Necesario para centrar con margin
                    margin: '0 auto', // Centra horizontalmente
                }}
            /> */}
        </Grid>
    )
}