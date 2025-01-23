import emailjs from '@emailjs/browser';

export async function sendEmail(fromName, email, message) {
    emailjs.init({
        publicKey: "1y1fFXJwwd-KWN4Jc",
    });

    try {
        await emailjs.send('service_nw8suuk', 'template_8i2njps',
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