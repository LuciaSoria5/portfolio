import emailjs from '@emailjs/browser';
import { getEnvVariables } from './getEnvVariables';

export async function sendEmail(fromName, email, message) {

    const { VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID } = getEnvVariables();
    // const { VITE_API_URL } = getEnvVariables();

    console.log(VITE_PUBLIC_KEY, VITE_SERVICE_ID, VITE_TEMPLATE_ID)

    emailjs.init({
        publicKey: VITE_PUBLIC_KEY,
    });

    try {
        await emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID,
            {
                from_name: fromName,
                message: message,
                email: email,
            });
        return {
            ok: true,
            fromName: fromName,
            email: email,
            message: message,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.text,
        };
    }
}