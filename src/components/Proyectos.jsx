import { forwardRef } from 'react';

import { Grid } from '@mui/material';
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
                padding: '14px', // Espacio alrededor de todo el contenido
            }}
        >
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
                style={{ padding: '30px' }} // Añadir espacio extra para la paginación
            > {
                    listaProyectos.map(proyecto => (
                        <SwiperSlide key={proyecto.titulo}>
                            <Proyecto
                                titulo={proyecto.titulo}
                                descripcion={proyecto.descripcion}
                                repositorio={proyecto.repositorio}
                                imagen={proyecto.imagen}
                                sitio={proyecto.sitio}
                                git={proyecto.git}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Grid>
    );
})