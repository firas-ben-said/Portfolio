import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export async function POST(req, res) {
    try {
        const { email, subject, message } = await req.json();

        let mailOptions = {
            from: process.env.EMAIL,
            to: [email],
            subject: subject,
            html: `
                <div>
                    <h1>${subject}</h1>
                    <p>thank you for reaching out to me. I will get back to you as soon as possible.</p>
                    <p>${message}</p>
                </div>
            `,
        };

        return new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error("Error sending email: ", err);
                    resolve(NextResponse.json({ error: 'Error sending email' }, { status: 500 }));
                } else {
                    console.log('Email sent: ' + info.response);
                    resolve(NextResponse.json({ message: 'Email sent successfully' }, { status: 200 }));
                }
            });
        });
    } catch (error) {
        console.error("Error parsing request body: ", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}