import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Face3Icon from '@mui/icons-material/Face3';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import WorkIcon from '@mui/icons-material/Work';

export const Navbar = () => {
  return (
    <AppBar 
        position="fixed"
        sx={{
          width: {sm: "100%"},
        }}
    >
        <Toolbar>
            <Grid 
              container 
              direction="row" 
              // justifyContent="space-between"
              alignItems="center"
            >
              <Typography 
                variant="h4" 
                noWrap 
                component="div"
              >
                Lucía Soria
              </Typography>
            </ Grid>

            <Grid 
              container 
              direction="row" 
              justifyContent="end"
              // alignItems="center"
              ml="0"
            >
              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<Face3Icon />}
              >
                Sobre mi
              </Button>
              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<SchoolIcon />}
              >
                Conocimientos
              </Button>
              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<WorkIcon />}
              >
                Experiencia
              </Button>
              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<ComputerIcon />}
              >
                Proyectos
              </Button>

            </Grid>
        </Toolbar>

    </AppBar>
  )
}
