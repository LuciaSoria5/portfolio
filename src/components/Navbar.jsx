import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Face3Icon from '@mui/icons-material/Face3';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import { useScroll } from '../hooks/useScroll';

export const Navbar = ({ posiciones= {} }) => {

  const { scrollToTop, scrollToBottom, scrollTo } = useScroll();
  return (
    <AppBar 
        position="fixed"
        sx={{
          width: {sm: "100%"},
          flexGrow: 1
        }}
    >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

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
