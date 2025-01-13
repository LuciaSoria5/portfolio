import { Box, Grid, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Contacto = () => {
    return (
        <Grid
            container
            justifyContent="center" /* Centrar proyectos horizontalmente */
            sx={{
                padding: '20px', // Espacio alrededor de todo el contenido
            }}
        >
            <Box>
                <Typography
                    variant='h2'
                    component='div'
                    gutterBottom
                    sx={{
                        fontFamily: 'Georgia, serif',
                        textAlign: 'center',
                    }}
                >
                    Contáctame
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb:2
                    }}>
                    <IconButton
                        role="button"
                        variant="contained"
                        onClick={() => window.open("https://www.linkedin.com/in/lucía-soria-7a66411b0", "_blank", "noopener noreferrer")}
                    >
                        <LinkedInIcon fontSize="large" sx={{ color: 'primary.color' }} />
                    </IconButton>
                    <IconButton
                        role="button"
                        variant="contained"
                        onClick={() => window.open("https://github.com/LuciaSoria5", "_blank", "noopener noreferrer")}
                    >
                        <GitHubIcon fontSize="large" sx={{ color: 'primary.color' }} />
                    </IconButton>
                    <IconButton
                        role="button"
                        variant="contained"
                        onClick={() => window.open("https://gitlab.com/LuciaSoria", "_blank", "noopener noreferrer")}
                    >
                        <FontAwesomeIcon icon={faSquareGitlab} size="xl" style={{ color: '#ececec' }} />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            display: 'flex', // Para alinear los elementos horizontalmente
                            alignItems: 'center', // Centra verticalmente los corazones y el texto
                            fontFamily: 'Georgia, serif',
                        }}
                    >
                        <FavoriteIcon sx={{ mr: 1, }} />
                        Gracias por tu visita
                        <FavoriteIcon sx={{ ml: 1 }} />
                    </Typography>
                </Box>
            </Box>
        </Grid>

    )
}