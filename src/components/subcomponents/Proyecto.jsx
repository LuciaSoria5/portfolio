import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material"


export const Proyecto = ({ titulo, descripcion, repositorio, imagen, sitio='' }) => {

    const ImgUrl = `./proyectos/${ imagen }`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ ImgUrl }
          alt={ titulo }
        />
        <CardContent>
          <Typography color="primary.color" gutterBottom variant="h4" component="div">
            { titulo }
          </Typography>
          <Typography variant="body" color="text.secondary">
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
                  target="_blank"
                  rel="noreferrer" 
                >Ir al sitio web
              </Link>
            </>
            )
          }
          <br/>
          <Link 
            color="primary.color"
            underline="hover" 
            href={repositorio}
            target="_blank"
            rel="noreferrer" 
          >Ver el repositorio GitHub
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
