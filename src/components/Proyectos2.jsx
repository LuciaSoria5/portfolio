import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { proyectos } from '../info';
import { Proyecto2 } from './subcomponents';
import { Grid } from '@mui/material';


export const Proyectos2 = () => {

    const listaProyectos = proyectos;
    const cantElementos = listaProyectos.length;

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            var next = prevActiveStep + 1
            if (next === cantElementos) {
                next = 0
            }
            return next
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            var next = prevActiveStep - 1
            if (next < 0) {
                next = cantElementos - 1
            }
            return next
        });
    };

    return (

        <Grid
            container
            justifyContent="center" /* Centrar proyectos horizontalmente */
            sx={{
                padding: '24px', // Espacio alrededor de todo el contenido
            }}
        >
            <Proyecto2
                titulo={listaProyectos[activeStep].titulo}
                descripcion={listaProyectos[activeStep].descripcion}
                repositorio={listaProyectos[activeStep].repositorio}
                imagen={listaProyectos[activeStep].imagen}
                sitio={listaProyectos[activeStep].sitio}
                git={listaProyectos[activeStep].git}
            />

            <MobileStepper
                variant="progress"
                steps={cantElementos}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext}>
                        Siguiente
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Atrás
                    </Button>
                }
            />
        </Grid>
    );
}
