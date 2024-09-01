import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Link, Toolbar, Typography } from "@mui/material"
import { ElevationScroll } from "./ElevationScroll";


export const Proyecto = ({ titulo, descripcion, repositorio, imagen, sitio='' }) => {

    const ImgUrl = `./proyectos/${ imagen }`;

  return (
    <Card className="overflow-auto" sx={{ width: '90%', height:'90%', padding:0 }}>
      <CardActionArea onClick={ () => window.open(repositorio, "_blank", "noopener noreferrer") }>
        <CardMedia
          component="img"
          image={ ImgUrl }
          alt={ titulo }
          height="200"
        />
        <CardContent>
          <Typography noWrap color="primary.color" gutterBottom variant="h5" component="div">
            { titulo }
          </Typography>

          <Typography variant="body" component="div" color="text.secondary" fontSize={20}>
            { descripcion }
          </Typography>
          
          { 
          sitio && (
            <>
              <br/>
              <Link
                  color="primary.color"
                  underline="hover" 
                  href={sitio}
                  fontSize={20}
                  target="_blank"
                  rel="noreferrer" 
                >Ir al sitio web
              </Link>
            </>
            )
          }
          {/* <br/>
          <Link 
            color="primary.color"
            underline="hover" 
            href={repositorio}
            target="_blank"
            rel="noreferrer" 
          >Ver el repositorio GitHub
          </Link> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
