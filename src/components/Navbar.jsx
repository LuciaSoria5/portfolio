// import * as React from 'react';
import { useState } from 'react';

import { HashLink } from 'react-router-hash-link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Face3Icon from '@mui/icons-material/Face3';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const scrollWithOffset = (el) => {
        const yOffset = -64; // Ajusta este valor según la altura de tu AppBar u otro elemento fijo
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      };


    return (
        <AppBar position="fixed"  >
        <Container maxWidth="xl" >
          <Toolbar disableGutters>
            {/*  --------------------------------- CHICO ----------------------------------------------------  */}
            <Typography
              variant="h4"
              noWrap
              role="button"
              // onClick={irArriba}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 900,
                textDecoration: 'none',
                fontFamily: 'Georgia, serif',
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
                <HashLink to={'/LuciaSoria#sobre-mi'} scroll={scrollWithOffset}>
                  <Face3Icon />
                  <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Sobre mi</Typography>
                </HashLink>

                <HashLink to={"/LuciaSoria#proyectos"} scroll={scrollWithOffset}>
                  <ComputerIcon />
                  <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Proyectos</Typography>
                </HashLink>

                <HashLink to={"/LuciaSoria#contacto"} scroll={scrollWithOffset}>
                  <ContactPageIcon />
                  <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Contacto</Typography>
                </HashLink>

              </Menu>
            </Box>


            {/*  --------------------------------- GRANDE ----------------------------------------------------  */}
            <Typography
              variant="h4"
              noWrap
              role="button"
              // onClick={irArriba}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: 'Georgia, serif',
              }}
            >
              Lucía Soria
            </Typography>
            <Box justifyContent="end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <HashLink to={"/LuciaSoria#sobre-mi"} scroll={scrollWithOffset}>
                <Face3Icon />
                <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Sobre mi</Typography>
              </HashLink>

              <HashLink to={"/LuciaSoria#proyectos"} scroll={scrollWithOffset}>
                <ComputerIcon />
                <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Proyectos</Typography>
              </HashLink>

              <HashLink to={"/LuciaSoria#contacto"} scroll={scrollWithOffset}>
                <ContactPageIcon />
                <Typography sx={{ textAlign: 'center', fontFamily: 'Andale Mono, monospace' }}>Contacto</Typography>
              </HashLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    );
}