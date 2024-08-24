import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { tema } from './tema';

export const AppTheme = ({ children }) => {
  // High component, vamos a aplicar el theme a sus componentes hijos
    return (
    <ThemeProvider theme={ tema } >
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}