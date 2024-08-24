import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom";

export const Proyecto = ({ titulo, descripcion, repositorio, imagen }) => {

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
          <Typography gutterBottom variant="h5" component="div">
            { titulo }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { descripcion }
          </Typography>
          <Link href={repositorio}>Ver el repositorio GitHub</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
