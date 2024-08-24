import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// hay un tema por defecto, y nosotros lo sobreescribimos
export const tema = createTheme({
    palette: {
        primary: {
            main: '#1d0c20',
            color: '#7037cd',
        },
        pink: {
            fucsia: '#9e1e4c', // fucsia
            rosa: '#ff1168',
        },
        grey: {
            gris: '#8f8f8f',
            grisClaro: '#ececec',
        },
        error: {
            main: red.A400
        }
    }
})