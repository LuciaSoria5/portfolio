import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material"


export const Proyecto = ({ titulo, descripcion, repositorio, imagen, sitio='' }) => {

    const ImgUrl = `./proyectos/${ imagen }`;

  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        image={ ImgUrl }
        alt={ titulo }
        sx={{
          width: 'auto',
          height: '30%',
          maxWidth: '100%',
        }}
      />
      <CardActionArea onClick={ () => window.open(repositorio, "_blank", "noopener noreferrer") }>
        <CardContent>
          <Typography noWrap color="primary.color" gutterBottom variant="h4" component="div">
            { titulo }
          </Typography>
          <Typography variant="body" color="text.secondary" fontSize={25}>
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
                  fontSize={25}
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
