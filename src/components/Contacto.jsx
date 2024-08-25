import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contacto = () => {
  return (
    <Grid 
        container 
        direction="row" 
        justifyContent="center"
        alignItems="center"
        mt={10}
        mb={5}
        sx={{
            height:"10%",
          }}
    >
        <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Typography 
                variant="h4" 
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
        <Grid
            item
            xs={12}
            mt={2}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Typography 
                variant="h6" 
                component="div"
            >
            Gracias por tu visita
            </Typography>
        </Grid>
    </Grid>

  )
}