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
        mt={10}
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
            role="button"
            variant="contained"
            onClick={() => window.open("https://www.linkedin.com/in/lucía-soria-7a66411b0", "_blank", "noopener noreferrer")}
        >
            <LinkedInIcon fontSize="large"/>
        </IconButton>
        <IconButton
            role="button"
            variant="contained"
            onClick={() => window.open("https://github.com/LuciaSoria5", "_blank", "noopener noreferrer")}
        >
            <GitHubIcon fontSize="large"/>
        </IconButton>
    </Grid>

  )
}
    {/* </Toolbar> */}
    // </AppBar>