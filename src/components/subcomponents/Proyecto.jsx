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
import { Tooltip, useMediaQuery } from '@mui/material';
import { Block } from '@mui/icons-material';

export const Proyecto = ({ proyecto }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detecta pantallas pequeñas
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('xl')); // Detecta pantallas pequeñas

  const { titulo, herramientas, descripcion, repositorio, imagen, sitio = '', git } = proyecto;

  var textoHerramientas = '';
  herramientas.forEach(herr => {
    textoHerramientas += '#' + herr + ' '.repeat(5);
  });

  const ImgUrl = `./proyectos/${imagen}`;

  return (
    <>
      {isSmallScreen || isMediumScreen
        ?
        (
          <Card
            sx={{
              // flexDirection: 'column', 
              display: 'block',          // Usa flexbox para manejar los iconos
              alignItems: 'center',     // Centra los iconos horizontalmente
              width: '100%',  // El ancho será controlado por el `Grid`
              height: 300,    // Fija la altura
              overflowY: 'auto',
              overflowX: 'auto',
            }}
          >

            <CardContent
              sx={{
                alignSelf: 'stretch', // Ocupa todo el ancho
              }}
            >
              <Typography component="div" variant="h5" mb={1}>
                {titulo}
              </Typography>
              <Typography variant="body1" component="div" fontSize={20} mb={3}>
                {descripcion}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                fontSize={17}
                // style={{ whiteSpace:'pre'}}
                sx={{
                  display: 'block', // Hace que el Typography sea un bloque
                  width: '100%', // Hace que ocupe todo el ancho disponible
                  wordWrap: 'break-word', // Permite que las palabras largas se dividan en la siguiente línea
                  whiteSpace: 'normal', // Permite que el texto se divida en varias líneas
                  fontFamily:'Andale Mono, monospace',
                }}
              >
                {textoHerramientas}
              </Typography>
              {/* </Block> */}
            </CardContent>

            <Box
              sx={{
                display: 'block',
                height: '100%',          // Asegura que el contenedor ocupe todo el espacio
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Box
                sx={{
                  flexDirection: 'row',  // Apila los iconos verticalmente
                  display: 'block',          // Usa flexbox para manejar los iconos
                  alignItems: 'center',     // Centra los iconos horizontalmente
                  gap: 1,                   // Espaciado entre los iconos
                  pl: 1,
                  pb: 1,
                  pr: 3,
                }}>
                {
                  sitio && (
                    <Tooltip title="Visitar sitio web">
                    <IconButton
                      role="button"
                      variant="contained"
                      onClick={() => window.open(sitio, "_blank", "noopener noreferrer")}
                    >
                      <LanguageIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                  )
                }
                <Tooltip title="Ver repositorio">
                <IconButton
                  role="button"
                  variant="contained"
                  onClick={() => window.open(repositorio, "_blank", "noopener noreferrer")}
                >
                  {git === "GitHub" ? (
                    <GitHubIcon fontSize="large" />
                  )
                    : (
                      <FontAwesomeIcon
                        icon={faSquareGitlab}
                        size="xl"
                        style={{ color: "#808080" }}
                      />
                    )}
                </IconButton>
                </Tooltip>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover', /* Imagen consistente */
                  display: 'block', // Necesario para centrar con margin
                  margin: '0 auto',
                }}
                image={ImgUrl}
                alt={titulo}
              />
            </Box>
          </Card>
        )

        :

        <Card
          sx={{
            display: 'flex',
            width: '100%',  // El ancho será controlado por el `Grid`
            height: 400,    // Fija la altura
            overflowY: 'auto',
            overflowX: 'auto',
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
              flexDirection={isSmallScreen ? 'row' : 'column'}  // Apila los iconos verticalmente
              sx={{
                display: 'flex',          // Usa flexbox para manejar los iconos
                alignItems: 'center',     // Centra los iconos horizontalmente
                gap: 1,                   // Espaciado entre los iconos
                pl: 1,
                pb: 1,
                pr: 3,
              }}>
              {
                sitio && (
                  <Tooltip title="Visitar sitio web">
                  <IconButton
                    role="button"
                    variant="contained"
                    onClick={() => window.open(sitio, "_blank", "noopener noreferrer")}
                  >
                    <LanguageIcon fontSize="large" />
                  </IconButton>
                  </Tooltip>
                )
              }
              <Tooltip title="Ver repositorio">
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
              </Tooltip>
            </Box>

            <CardContent
              sx={{
                alignSelf: 'stretch', // Ocupa todo el ancho
              }}
            >
              <Typography component="div" variant="h5"  mb={1}>
                {titulo}
              </Typography>
              <Typography variant="body1" component="div" fontSize={20} mb={2}>
                {descripcion}
              </Typography>
              <Typography variant="body1" component="div" fontSize={17} fontFamily={'Andale Mono, monospace'}>
                {textoHerramientas}
              </Typography>

            </CardContent>

          </Box>
        </Card>
      }
    </>
  );
}
