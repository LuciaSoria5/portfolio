import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

export const Presentacion = () => {
  return (
    // <div className="row mt-5">
      <Grid 
        container
        mt={10}
        direction="row" 
        justifyContent="center"
        alignItems="center"
        display='flex'
      >
        <Grid 
          item 
          md={7} 
          sx={{ textAlign: 'center' }} 
        >
          <Typography variant="h3" component="div">
            ¡Hola! Mi nombre es
          </Typography>
          <Typography variant="h1" component="div">
            Lucía Soria
          </Typography>
          <hr/>
          <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <List>
              <ListItem >
                  <ListItemIcon>
                    <StarIcon fontSize="large" sx={{ color:"primary.color"}} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Desarrolladora Full stack"
                    primaryTypographyProps={{ variant: 'h4'}}
                  />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                    <StarIcon  fontSize="large" sx={{ color:"primary.color"}} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Docente de Programación"
                    primaryTypographyProps={{ variant: 'h4' }}
                  />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item md={5} >
              <img src="/naruto.png" alt="Imagen"/>
        </Grid>
      </Grid>
    // </div>
  )
}
