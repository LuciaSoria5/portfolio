import React, { useState } from 'react'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { Educacion, Habilidades, Tecnologias as Tecnologias2 } from './subcomponents'

export const Tecnologias = () => {

    // 1 --> tecnologias, 2 --> habilidades, 3 --> educacion
    const vistas = ['Tecnologias', 'Habilidades', 'Formación Académica'];
    const [vista, setVista] = useState(1);
    

    const sumarVista = () => {
        const nuevaVista = vista + 1;
        (nuevaVista !== 4)
        ? setVista( nuevaVista )
        : setVista( 1 );
    }

    const restarVista = () => {
        (vista === 2 || vista === 3)
        ? setVista( vista - 1)
        : setVista( 3 );
    }

  return (
    <>
        <div className="row mt-5 justify-content-center align-items-center p-3 border bg-light">
                {vista == 1 ? (
                    <Tecnologias2 />
                ) : vista == 2 ? (
                    <Habilidades />
                ) : (
                    <Educacion />
                )}
                <Grid item xs={ 12 } sm={ 6 }>
            <Button
                variant="contained" 
                onClick={ restarVista }
                sx={{
                    mt: 2,
                    mr: 4
                }}
            >
                <WestIcon />
                <Typography 
                    sx={{ 
                        ml: 1
                        // color
                    }}
                >
                Ver { ( vista !== 1) ? vistas[ vista - 2 ] : vistas[ 2 ]}</Typography>
            </Button>
            <Button
                variant="contained" 
                onClick={ sumarVista }
                sx={{
                    mt: 2,
                    mr: 4
                }}
            >
                <Typography 
                    sx={{ 
                        mr: 1
                        // color
                    }}
                >
                Ver { ( vista !== 3) ? vistas[ vista ] : vistas[ 0 ]}</Typography>
                <EastIcon />
            </Button>
        </Grid>
        </div>
        
    </>
  )
}


    {/* Habilidades */}
        {/* <div className="row mt-5 justify-content-center">
            <div className="col-md-4 tecnologias" >
                <h2>Tecnologías</h2>
                <div className="row">
                    <div className="col-2">
                        <ul>
                            <li>React</li>
                            <li>.Net</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>ArangoDB</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-4 tecnologias" >
                <h2>Habilidades blandas</h2>
            </div>
            <div className="col-4 tecnologias" >
                <h2>Educación</h2>
            </div>
        </div> */}