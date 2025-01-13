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

const textoEstiloChico = {
    fontFamily: 'Andale Mono, monospace',
    color: 'primary.main',
    ml: '8px',

};

const textoEstiloGrande = {
    fontFamily: 'Andale Mono, monospace',
    color: 'primary.color',
};

const boxHashEstiloChico = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s',
    color: 'inherit',
    '&:hover': {
        backgroundColor: '#f0f0f0',
    },
    '&:active': {
        backgroundColor: '#e0e0e0',
    },
}

const boxHashEstiloGrande = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, color 0.3s',
    color: 'inherit',
    '&:hover': {
        backgroundColor: '#purple.color',
    },
    '&:active': {
        backgroundColor: '#e0e0e0',
    },
}

const hashEstiloChico = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
}

const hashEstiloGrande = {
    // alignItems: 'center',
    textDecoration: 'none',
    color: 'primary.color',
    padding: '8px',
}

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
                    <HashLink
                        to={"/LuciaSoria#top"}
                        style={{ textDecoration: 'none' }}
                        scroll={scrollWithOffset}
                    >
                        <Typography
                            variant="h4"
                            noWrap
                            role="button"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 900,
                                textDecoration: 'none',
                                fontFamily: 'Georgia, serif',
                                color: 'primary.color'
                            }}
                        >
                            Lucía Soria
                        </Typography>
                    </HashLink>
    {/*  --------------------------------- CHICO ----------------------------------------------------  */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                        }}
                    >
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: 'main.color',
                                cursor: 'pointer'
                            }}
                        >
                            <Box sx={boxHashEstiloChico}>
                                <HashLink
                                    to={'/LuciaSoria#sobre-mi'}
                                    scroll={scrollWithOffset}
                                    style={hashEstiloChico}
                                >
                                    <Face3Icon sx={{ color: 'primary.main' }} />
                                    <Typography variant='h6' sx={textoEstiloChico}>Sobre mi</Typography>
                                </HashLink>
                            </Box>

                            <Box sx={boxHashEstiloChico}>
                                <HashLink
                                    to={"/LuciaSoria#proyectos"}
                                    scroll={scrollWithOffset}
                                    style={hashEstiloChico}
                                >
                                    <ComputerIcon sx={{ color: 'primary.main' }} />
                                    <Typography variant='h6' sx={textoEstiloChico}>Proyectos</Typography>
                                </HashLink>
                            </Box>

                            <Box sx={boxHashEstiloChico}>
                                <HashLink
                                    to={"/LuciaSoria#contacto"}
                                    scroll={scrollWithOffset}
                                    style={hashEstiloChico}
                                >
                                    <ContactPageIcon sx={{ color: 'primary.main' }} />
                                    <Typography variant='h6' sx={textoEstiloChico}>Contacto</Typography>
                                </HashLink>
                            </Box>
                        </Menu>
                    </Box>

                    <HashLink
                        to={"/LuciaSoria#top"}
                        style={{ textDecoration: 'none' }}
                        scroll={scrollWithOffset}
                    >
                        <Typography
                            variant="h4"
                            noWrap
                            role="button"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontFamily: 'Georgia, serif',
                                color: 'primary.color'
                            }}
                        >
                            Lucía Soria
                        </Typography>
                    </HashLink>

    {/*  --------------------------------- GRANDE ----------------------------------------------------  */}
                    <Box
                        justifyContent="end"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            textAlign: 'center'
                        }}
                    >
                        <Box sx={boxHashEstiloGrande}>
                            <HashLink
                                to={"/LuciaSoria#sobre-mi"}
                                scroll={scrollWithOffset}
                                style={hashEstiloGrande}
                            >
                                <Face3Icon sx={{ color: 'primary.color' }} />
                                <Typography sx={textoEstiloGrande}>Sobre mi</Typography>
                            </HashLink>
                        </Box>

                        <Box sx={boxHashEstiloGrande}>
                            <HashLink
                                to={"/LuciaSoria#proyectos"}
                                scroll={scrollWithOffset}
                                style={hashEstiloGrande}
                            >
                                <ComputerIcon sx={{ color: 'primary.color' }} />
                                <Typography sx={textoEstiloGrande}>Proyectos</Typography>
                            </HashLink>
                        </Box>

                        <Box sx={boxHashEstiloGrande}>
                            <HashLink
                                to={"/LuciaSoria#contacto"}
                                scroll={scrollWithOffset}
                                style={hashEstiloGrande}
                            >
                                <ContactPageIcon sx={{ color: 'primary.color' }} />
                                <Typography sx={textoEstiloGrande}>Contacto</Typography>
                            </HashLink>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}