import React from 'react'
import { personales } from '../../info/conocimientos';
import { Grid } from '@mui/material';

export const Habilidades = () => {
  const habilidades = personales;

  return (
    <Grid
      container
      justifyContent="left"
      spacing={3}
      sx={{
        padding: '24px',
        fontFamily: 'Andale Mono, monospace',
      }}

    >
      {habilidades.map( h => {
        return (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3}
            key={h}
          >
           <h4>{h}</h4>
          </Grid>
        );
      })}

    </Grid>
  )
}
