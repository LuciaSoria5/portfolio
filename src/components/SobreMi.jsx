import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const SobreMi = () => {
  return (
    <Grid 
    // className="row mt-5 justify-content-center align-items-center"
      container
      direction="row" 
      mt={5}
      justifyContent="center"
      alignItems="center"
      display='flex'
      spacing={2}
    >
      <Grid item md={4} mr={2} ml={2}>
        <img src="/naruto.png" alt="Imagen"/>
      </Grid>

      <Grid item md={4} sx={{ textAlign: 'center' }} >
        <Typography variant="h2" component="div">
          Sobre mi:
        </Typography>
        <Typography variant="body1" component="div">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor reprehenderit, aut fugit voluptatum harum adipisci! Voluptate beatae ipsum ratione, repellendus quae officiis fugiat quis adipisci, expedita fuga dignissimos ut! Quam.
        </Typography>
      </Grid>
    </Grid>
  )
}
