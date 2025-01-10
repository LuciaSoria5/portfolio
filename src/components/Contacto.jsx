import { Grid, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons'
import FavoriteIcon from '@mui/icons-material/Favorite';

// import { fa-square-gitlab} from '@fortawesome/free-brands-svg-icons'
// import GitLabIcon from '@mui/icons-material/GitLab';

export const Contacto = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                height: "10%"
            }}
        >
            <Grid
                item
                xs={12}
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        // fontFamily: 'Andale Mono, monospace',
                    }}
                >
                    Contáctame
                </Typography>
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
                    // style={{ color:'primary.color' }}
                    variant="contained"
                    onClick={() => window.open("https://gitlab.com/LuciaSoria", "_blank", "noopener noreferrer")}
                >
                    <FontAwesomeIcon icon={faSquareGitlab} size="xl" style={{ color: '#ececec' }} />
                </IconButton>

            </Grid>
            <Grid
                item
                xs={12}
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    mb: 2
                }}
            >
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
            </Grid>
        </Grid>

    )
}