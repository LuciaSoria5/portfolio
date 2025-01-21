import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const styleTextField =
{
    width: "100%",
    borderRadius: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 2,
}

export const Mail = () => {
    return (        
        <Box
            container
            flexDirection={'column'}
            sx={{
                display: 'block',
                textAlign: "center",
                padding: '10px',
                mb: '10px',
                backgroundColor: 'grey.grisClaro',
            }}
        >
            <div>
                <TextField
                    required
                    id="fromEmail"
                    label="Email"
                    placeholder='example@gmail.com'
                    variant="filled"
                    fullWidth 
                    sx={styleTextField}
                    size='normal'
                />
            </div>
            <div>
                <TextField
                    required
                    id="email"
                    label="¡Contáctame!"
                    placeholder='Buenas!'
                    variant="filled"
                    multiline
                    fullWidth 
                    rows={10}
                    sx={styleTextField}
                    size='normal'
                />
            </div>
            <div>
                <Button 
                    variant="outlined"
                >
                    Enviar
                </Button>
            </div>
        </Box>
    )
}
