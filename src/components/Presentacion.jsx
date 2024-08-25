import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

export const Presentacion = () => {
  return (
    <div className="row mt-5">
      <Grid 
        container 
        direction="row mt-5" 
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} lg={10} sx={{ textAlign: 'center' }} >
          <Typography variant="h3" component="div">
            ¡Hola! Mi nombre es
          </Typography>
          <br/>
          <Typography variant="h1" component="div">
            Lucía Soria
          </Typography>
          <hr/>

          <List>
            <ListItem>
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

        </Grid>
        <Grid item md={6} lg={2} >
          {/* // className="col-md-6"> */}
              <img src="/naruto.png" alt="Imagen"/>
        </Grid>
      </Grid>
    </div>
  )
}
