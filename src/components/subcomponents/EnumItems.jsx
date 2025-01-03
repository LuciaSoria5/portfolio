import React from 'react'
import { Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export const EnumItems = ({ json }) => {

  return (
    <Grid
      container
      justifyContent="center"
      spacing={6}
      sx={{
        padding: '24px',
      }}
    >
      {json.map((area, indice) => {
        const [clave, valor] = Object.entries(area)[0];
        return (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3}
            key={indice}
          >
            <h4><CheckIcon fontSize='large'/>{clave}</h4>
            {valor.map((item, i) => (
              <Grid key={i}>
                {Object.entries(item).map(([subKey, subValue], j) => (
                  <Grid key={j}>
                    {
                      subValue.length > 0 ?
                        <strong>{subKey}: </strong>
                      :
                        <strong>{subKey}</strong>
                    }
                    {
                      Array.isArray(subValue) ? (
                        subValue.map((v, indice) => (
                          <Grid
                            key={indice}
                            ml={3}
                          >
                            {v}
                          </Grid>)
                        ))
                        : (
                          subValue
                        )}
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