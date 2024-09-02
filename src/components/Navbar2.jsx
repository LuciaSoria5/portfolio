// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { Button } from '@mui/material';
import Face3Icon from '@mui/icons-material/Face3';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const Navbar2 = ({ posiciones= {} }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { scrollToTop, scrollToBottom, scrollTo } = useScroll();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

const irArriba = () => {
    handleCloseNavMenu();
    scrollToTop({
        duration: 20,
        smooth: true,
        delay: 0,
        isDynamic: true,
      })
}

const irAbajo = () => {
    handleCloseNavMenu();
    scrollToBottom({
        duration: 20,
        smooth: true,
        delay: 0,
        isDynamic: true,
      })
}

const irProyectos = () => {
    handleCloseNavMenu();
    scrollTo( posiciones.proyectos.top, {
        duration: 20,
        smooth: true,
        delay: 0,
        isDynamic: true,
      });
}

  return (
    <AppBar position="fixed"  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/*  --------------------------------- CHICO ----------------------------------------------------  */}
          <Typography
            variant="h4"
            noWrap
            role="button"
            onClick={irArriba}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
            //   fontFamily: 'monospace',
              fontWeight: 900,
            //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            Lucía Soria
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem key="sobreMi" onClick={irArriba}>
                    <Face3Icon />
                    <Typography sx={{ textAlign: 'center' }}>Sobre mi</Typography>
                </MenuItem>
                <MenuItem key="proyectos" onClick={irProyectos}>
                    <ComputerIcon />
                    <Typography sx={{ textAlign: 'center' }}>Proyectos</Typography>
                </MenuItem>
                <MenuItem key="contacto" onClick={irAbajo} start>
                    <ContactPageIcon />
                    <Typography sx={{ textAlign: 'center' }}>Contacto</Typography>
                </MenuItem>
            </Menu>
          </Box>
{/*  --------------------------------- GRANDE ----------------------------------------------------  */}
          <Typography
            variant="h4"
            noWrap
            role="button"
            onClick={irArriba}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            //   fontFamily: 'monospace',
              fontWeight: 700,
            //   letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            Lucía Soria
          </Typography>
          <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Button
                key="sobreMi" 
                onClick={irArriba}
                startIcon={<Face3Icon />}
                sx={{ my: 2, color: 'white', display: 'block', mr: 2}}
            >
                Sobre mi
            </Button>
            <Button
                key="proyectos" 
                onClick={irProyectos}
                startIcon={<ComputerIcon />}
                sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
            >
                Proyectos
            </Button>
            <Button
                key="contacto" 
                onClick={irAbajo}
                startIcon={<ContactPageIcon />}
                sx={{ my: 2, color: 'white', display: 'block'}}
            >
                Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}