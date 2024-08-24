import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contacto = () => {
  return (
    // <AppBar 
    //     position="fixed"
    //     sx={{
    //       width: {sm: "100%"},
    //     }}
    // >
    //     {/* <Toolbar> */}
    <Grid 
        container 
        direction="row" 
        justifyContent="center"
        alignItems="center"
        sx={{
            height:"10%",
          }}
    >
        <Typography 
            variant="h4" 
            noWrap 
            component="div"
        >
        ¡Contactame!
        </Typography>
        <IconButton
            // component="label"
            role="button"
            variant="contained"
            // startIcon={}
        >
            <LinkedInIcon fontSize="large"/>
        </IconButton>
        <IconButton
            // component="label"
            role="button"
            variant="contained"
            
            // startIcon={}
        >
            <GitHubIcon fontSize="large"/>
        </IconButton>
    </Grid>

  )
}
    {/* </Toolbar> */}
    // </AppBar>