import React, { useState } from 'react';
import { Alert, Box, Button, CircularProgress, TextField } from '@mui/material';
import { useForm } from '../../hooks/UseForm';
import { sendEmail } from '../../helpers/sendEmail';

const styleTextField =
{
    width: "100%",
    borderRadius: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 2,
}

const formData = {
    email: '',
    message: ''
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// { campo: [ funcion de validacion (correcta), mensaje de error] }
const formValidations = {
    email: [(value) => emailRegex.test(value), 'Ingresa un correo electrónico.'],
    message: [(value) => value.length >= 1, 'El mensaje no puede estar vacío.']
};
const fromName = "Portfolio"

export const Mail = () => {

    const { formState, email, message, onInputChange, isFormValid, messageValid, emailValid, onResetForm } = useForm(formData, formValidations);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [okMessage, setOkMessage] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        setIsLoading(true)

        if (!isFormValid) return;

        const { ok, errorMessage } = await sendEmail(fromName, email, message);

        if (!ok) {
            setErrorMessage(errorMessage);
            setOkMessage('');
            Swal.fire({
                icon: "error",
                title: "Algo salió mal...",
                text: errorMessage,
            });
        }
        else {
            setErrorMessage('');
            setOkMessage('Mensaje enviado');
            onResetForm();
            Swal.fire({
                title: "Mensaje enviado",
                icon: "success",
            });
        }
        setIsLoading(false)
    }

    return (
        <form
            onSubmit={onSubmit}
        >
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
                        name="email"
                        label="Email"
                        placeholder='example@gmail.com'
                        variant="filled"
                        fullWidth
                        sx={styleTextField}
                        size='normal'
                        value={email}
                        onChange={onInputChange}
                        // error={!!emailValid && formSubmitted}
                        helperText={emailValid}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="email"
                        name="message"
                        label="¡Contáctame!"
                        placeholder='Buenas!'
                        variant="filled"
                        multiline
                        fullWidth
                        rows={10}
                        sx={styleTextField}
                        size='normal'
                        value={message}
                        onChange={onInputChange}
                        // error={!!messageValid && (formSubmitted)}
                        helperText={messageValid}
                    />
                </div>
                <div>
                    { isLoading
                        ?
                            <CircularProgress color="secondary" />
                            :
                            <Button
                                variant="outlined"
                                type="submit"
                                disabled={!!emailValid || !!messageValid}
                            >
                                Enviar
                            </Button>
                    }
                </div>
            </Box>
        </form>
    )
}
