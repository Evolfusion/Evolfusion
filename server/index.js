import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';  // Importación correcta
import './db.js';
import { Resend } from 'resend';
import Info from './model/messageModel.js';

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
// Configurar CORS
// CORS Config
app.use(cors({
    origin: 'https://www.evolfusion.com',  // Permitir solicitudes solo de este origen
    methods: ['GET', 'POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  // Asegura que las cookies y cabeceras de autenticación se puedan enviar
}));

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://www.evolfusion.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204);  // No devuelve contenido
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://www.evolfusion.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(express.json());
app.use(express.static('public'));

// Rutas
app.get('/api/info', async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los datos de la base de datos" });
    }
});

// Ruta para guardar la información en la base de datos
app.post('/api/info', async (req, res) => {
    try {
        const { name, lastname, tel, email, message } = req.body;

        // Validación de campos vacíos
        if (!name || !lastname || !tel || !email || !message) {
            return res.status(400).json({ msg: 'Por favor, completa todos los campos' });
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ msg: 'Por favor, ingresa un correo electrónico válido' });
        }

        // Validación de formato de teléfono
        const telRegex = /^[0-9]{10}$/;
        if (!telRegex.test(tel)) {
            return res.status(400).json({ msg: 'Por favor, ingresa un número de teléfono válido (10 dígitos)' });
        }

        const info = new Info({ name, lastname, tel, email, message });
        await info.save();
        res.json({ msg: 'Mensaje guardado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al guardar el mensaje en la base de datos" });
    }
});

// Ruta para enviar el correo
app.post("/send-form", async (req, res) => {
    const { name, lastname, tel, email, message } = req.body;

    try {
        // Validación de campos vacíos
        if (!name || !lastname || !tel || !email || !message) {
            return res.status(400).json({ msg: 'Por favor, completa todos los campos' });
        }

        // Validación de formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ msg: 'Por favor, ingresa un correo electrónico válido' });
        }

        // Validación de formato de teléfono
        const telRegex = /^[0-9]{10}$/;
        if (!telRegex.test(tel)) {
            return res.status(400).json({ msg: 'Por favor, ingresa un número de teléfono válido (10 dígitos)' });
        }

        // Envío del correo utilizando la API de Resend
        const respuesta = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "evolfusion.arg@gmail.com",
            subject: "Asesoramiento",
            text: `Nombre: ${name}\nApellido: ${lastname}\nTeléfono: ${tel}\nCorreo: ${email}\nMensaje: ${message}`
        });

        console.log("Correo enviado con éxito:", respuesta);
        res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el correo", error: error.message });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en https://evolfusion.com`);
});


