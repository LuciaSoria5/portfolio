import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Face3Icon from '@mui/icons-material/Face3';
// import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
// import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useScroll } from '../hooks/useScroll';

export const Navbar = ({ posiciones= {} }) => {

  console.log(posiciones)
  const { scrollToTop, scrollToBottom, scrollTo } = useScroll();
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
            >
              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<Face3Icon />}
                onClick={ () => scrollToTop({
                  duration: 20,
                  smooth: true,
                  delay: 0,
                  isDynamic: true,
                }) }
              >
                Sobre mi
              </Button>

              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<ComputerIcon />}
                onClick={ () => scrollTo( posiciones.proyectos.top, {
                  duration: 20,
                  smooth: true,
                  delay: 0,
                  isDynamic: true,
                }) }
              >
                Proyectos
              </Button>

              <Button
                component="label"
                role="button"
                variant="contained"
                startIcon={<ContactPageIcon />}
                onClick={ () => scrollToBottom({
                  duration: 20,
                  smooth: true,
                  delay: 0,
                  isDynamic: true,
                }) }
              >
                Contacto
              </Button>

            </Grid>
        </Toolbar>

    </AppBar>
  )
}
