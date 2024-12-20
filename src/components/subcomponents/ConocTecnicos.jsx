import React from 'react'
import { Grid } from '@mui/material';
import { tecnicos } from '../../info/conocimientos';

export const ConocTecnicos = () => {
  const tecnologias  = tecnicos;

  return (
    <Grid 
    container
    justifyContent="left"
    spacing={3}
    sx={{ 
      padding: '24px',
    }}
    
  >
        {tecnologias.map((area, indice) => {
          const [clave, valor] = Object.entries(area)[0];
          return (
            <Grid 
              item 
              xs={12} sm={6} md={4} lg={3}
              key={indice}
            >
              <h4>{clave}</h4>
              {valor.map((item, i) => (
                <Grid key={i}>
                  {Object.entries(item).map(([subKey, subValue], j) => (
                    <Grid key={j}>
                      <strong>{subKey}:</strong> {Array.isArray(subValue) ? subValue.join(', ') : subValue}
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          );
        })}

      </Grid>
  )
}