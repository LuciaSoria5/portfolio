import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// .color1 { #2e1e45 };  MORADO
// .color2 { #612a52 }; VIOLETA
// .color3 { #ba3259 }; FUCSIA
// .color4 { #ff695c }; ROSA/SALMON
// .color5 { #ccbca1 }; CAQUI

// hay un tema por defecto, y nosotros lo sobreescribimos
export const tema = createTheme({
    palette: {
        primary: {
            main: '#2e1e45', // morado
            color: '#ececec', // gris claro
        },
        purple: { // violeta
            color: '#612a52',
        },
        pink: {
            fucsia: '#ba3259',
            rosa: '#ff695c',
        },
        grey: {
            gris: '#8f8f8f',
            grisClaro: '#ececec',
            caqui: 'ccbca1'
        },
        error: {
            main: red.A400
        }
    }
})