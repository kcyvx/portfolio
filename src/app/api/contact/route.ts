import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configuration du transporteur email
    // Utilisez vos propres identifiants SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex: 'smtp.gmail.com'
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour les autres ports
      auth: {
        user: process.env.SMTP_USER, // votre email
        pass: process.env.SMTP_PASS, // votre mot de passe ou mot de passe d'application
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'gt78colo@gmail.com',
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}