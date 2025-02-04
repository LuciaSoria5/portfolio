import { Box, Grid, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { proyectos } from '../info';
import { Proyecto } from './subcomponents';

export const Proyectos = () => {
    const listaProyectos = proyectos;

    return (
        <Box
            container
            justifyContent="center" /* Centrar proyectos horizontalmente */
            sx={{
                // minHeight: '90vh',
                alignItems: 'center',
                justifyContent: 'center',
                // mt: 2,
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
                        textAlign: 'center',
                    }}
                >
                    Mis proyectos
                </Typography>
            </Box>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
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
            {/* <Box
                component='img'
                src='/img/guarda.png'
                alt='Imagen'
                sx={{
                    width: '48%', // Imagen ocupa todo el ancho disponible
                    maxWidth: '100%', // Ancho máximo
                    height: 'auto', // Mantiene proporciones
                }}
            /> */}
        </Box>
    );
}