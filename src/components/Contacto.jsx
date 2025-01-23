import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Mail } from './subcomponents/Mail';

// const colorIconos = 'primary.main';
// const colorIconos = 'primary.negroRosa'

export const Contacto = () => {
    return (
        <Box
            // container
            // justifyContent="center" /* Centrar proyectos horizontalmente */
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
                <Mail />
                <Typography
                    variant='h4'
                    component='div'
                    gutterBottom
                    sx={{
                        fontFamily: 'Georgia, serif',
                        textAlign: 'center',
                    }}
                >
                    Visita mis redes
                </Typography>
                <Box
                    sx={{
                        textAlign: "center", // Centra el contenido dentro del contenedor padre
                        width: "100%",
                        mb: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "inline-flex", // Ajusta el tamaño al contenido
                            gap: "8px",
                            padding: "5px",
                            backgroundColor: "grey.grisClaro",
                            borderRadius: "8px",
                        }}
                    >
                        <Tooltip title="Ver perfil en LinkedIn">
                            <IconButton
                                role="button"
                                variant="contained"
                                onClick={() => window.open("https://www.linkedin.com/in/lucía-soria-7a66411b0", "_blank", "noopener noreferrer")}
                            >
                                <LinkedInIcon fontSize="large" sx={{}} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Ir a GitHub">
                            <IconButton
                                role="button"
                                variant="contained"
                                onClick={() => window.open("https://github.com/LuciaSoria5", "_blank", "noopener noreferrer")}
                            >
                                <GitHubIcon fontSize="large" sx={{}} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Ir a GitLab">
                            <IconButton
                                role="button"
                                variant="contained"
                                onClick={() => window.open("https://gitlab.com/LuciaSoria", "_blank", "noopener noreferrer")}
                            >
                                <FontAwesomeIcon icon={faSquareGitlab} size="xl" style={{}} />
                            </IconButton>
                        </Tooltip>
                    </Box>
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
        </Box>

    )
}