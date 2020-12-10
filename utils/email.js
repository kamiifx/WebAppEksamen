import nodemailer from 'nodemailer';

    export const sendMail = async (options) =>{
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
    });
    let info = await transporter.sendMail({
        from: options.from,
        to: options.email,
        subject: options.subject,
        text: options.message,
    });

}

