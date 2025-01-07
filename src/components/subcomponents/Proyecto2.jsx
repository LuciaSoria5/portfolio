import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons'
import LanguageIcon from '@mui/icons-material/Language';

export const Proyecto2 = ({ titulo, descripcion, repositorio, imagen, git, sitio = '' }) => {

  const ImgUrl = `./proyectos/${imagen}`;

  return (
    <Card
      sx={{
        display: 'flex',
        width: '100%',  // El ancho será controlado por el `Grid`
        height: 300,    // Fija la altura
        overflowY: 'auto',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 'auto',
          height: '100%',
          objectFit: 'cover' /* Imagen consistente */
        }}
        image={ImgUrl}
        alt={titulo}
      />
      <Box
        sx={{
          display: 'flex',
          height: '100%',          // Asegura que el contenedor ocupe todo el espacio
          alignItems: 'center',
          justifyContent: 'center',
        }}>

        <Box
          sx={{
            display: 'flex',          // Usa flexbox para manejar los iconos
            flexDirection: 'column',  // Apila los iconos verticalmente
            alignItems: 'center',     // Centra los iconos horizontalmente
            gap: 1,                   // Espaciado entre los iconos
            pl: 1,
            pb: 1,
            pr: 3,
          }}>
          {
            sitio && (
              <IconButton
                role="button"
                variant="contained"
                onClick={() => window.open(sitio, "_blank", "noopener noreferrer")}
              >
                <LanguageIcon fontSize="large" />
              </IconButton>
            )
          }
          <IconButton
            role="button"
            variant="contained"
            onClick={() => window.open(repositorio, "_blank", "noopener noreferrer")}
          >
            {git === "GitHub" ? (
              <GitHubIcon fontSize="large" />
            ) : (
              <FontAwesomeIcon
                icon={faSquareGitlab}
                size="xl"
                style={{ color: "#808080" }}
              />
            )}
          </IconButton>
        </Box>

        <CardContent
          sx={{
            // alignSelf: 'stretch', // Ocupa todo el ancho
          }}
        >
          <Typography component="div" variant="h5">
            {titulo}
          </Typography>
          <Typography variant="body1" component="div" fontSize={20}>
            {descripcion}
          </Typography>
        </CardContent>

      </Box>
    </Card>
  );
}
