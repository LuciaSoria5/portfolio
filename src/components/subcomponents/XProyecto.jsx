import { Card, CardContent, CardMedia, Typography, IconButton } from "@mui/material"
import { ElevationScroll } from "./ElevationScroll";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons'
import LanguageIcon from '@mui/icons-material/Language';


export const XProyecto = ({ titulo, descripcion, repositorio, imagen, git, sitio='' }) => {

    const ImgUrl = `./proyectos/${ imagen }`;

  return (
    <Card 
    
      className="overflow-auto" 
      sx={{ 
        width: '100%',  // El ancho será controlado por el `Grid`
        height: 450,    // Fija la altura
        display: 'flex', 
        flexDirection: 'column',
      }}  
    >
      {/* <CardActionArea onClick={ () => window.open(repositorio, "_blank", "noopener noreferrer") }> */}
        <CardMedia
          component="img"
          image={ ImgUrl }
          alt={ titulo }
          sx={{ 
            width: '300px', 
            objectFit: 'cover' /* Imagen consistente */
          }} 
        />
        <CardContent >
          <Typography noWrap gutterBottom variant="h5" component="div">
            { titulo }
          </Typography>
          <Typography variant="body" component="div"  fontSize={20}>
            { descripcion }
          </Typography>
          { 
          sitio && (
            <IconButton
            role="button"
            variant="contained"
            onClick={() => window.open(sitio, "_blank", "noopener noreferrer")}
            >   
              <LanguageIcon fontSize="large"/>
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
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  )
}
