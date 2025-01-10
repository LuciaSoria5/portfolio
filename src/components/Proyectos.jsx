import { forwardRef } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { proyectos } from '../info';
import { Proyecto } from './subcomponents';

export const Proyectos = forwardRef((props, ref) => {
    const listaProyectos = proyectos;

    return (
        <Grid
            ref={ref}
            container
            justifyContent="center" /* Centrar proyectos horizontalmente */
            sx={{
                padding: '20px', // Espacio alrededor de todo el contenido
            }}
        >
            <Box >
                <Typography 
                    variant='h2' 
                    component='div' 
                    gutterBottom
                    sx={{
                        fontFamily: 'Georgia, serif',
                    }}
                >
                    Mis proyectos
                </Typography>
            </Box>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ padding: '20px' }} // Añadir espacio extra para la paginación
            > {
                    listaProyectos.map(proyecto => (
                        <SwiperSlide key={proyecto.titulo}>
                            <Proyecto
                                proyecto = {proyecto}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Box
                component='img'
                src='/guarda.png'
                alt='Imagen'
                sx={{
                    width: '48%', // Imagen ocupa todo el ancho disponible
                    maxWidth: '100%', // Ancho máximo
                    height: 'auto', // Mantiene proporciones
                }}
            />
        </Grid>
    );
})