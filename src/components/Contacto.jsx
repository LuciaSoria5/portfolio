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
            // mt={10}
            // mb={5}
            sx={{
                height: "10%"
            }}
        >
            <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'primary.color' }}
            >
                <Typography
                    variant="h4"
                    component="div"
                >
                    ¡Contáctame!
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
                // mt={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <br />
                <Typography
                    variant="h6"
                    component="div"
                >
                    <FavoriteIcon />
                    Gracias por tu visita
                    <FavoriteIcon />
                </Typography>
            </Grid>
        </Grid>

    )
}