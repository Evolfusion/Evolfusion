/* import { Resend } from 'resend'; */
import express from 'express';
import dotenv from 'dotenv';
import './db.js';  // Esto es correcto si 'db.js' está en el mismo directorio que 'index.js'
import cors from 'cors';
import Info from './model/messageModel.js';


// Configura dotenv para cargar las variables de entorno
dotenv.config();

/* const resend = new Resend(process.env.RESEND_API_KEY);  */// Usar la clave API desde el .env
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], // Métodos permitidos
    allowedHeaders: ["Content-Type"]
}));


app.use(express.json());
app.use(express.static('public'));

app.get('/api/info', async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

app.post('/api/info', async (req, res) => {
    try {
        const { name, lastname, tel, email, message } = req.body;

        if (!name || !lastname || !tel || !email || !message) {
            return res.status(400).json({ msg: 'Por favor, completa todos los campos' });
        }

        const info = new Info({
            name: name.trim(),
            lastname: lastname.trim(),
            tel: tel.trim(),
            email: email.trim(),
            message: message.trim()
        });

        await info.save();
        res.json({ msg: 'Mensaje guardado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al guardar el mensaje" });
    }
});

/* ENVÍO MAIL */
/* app.post("/send-form", async (req, res) => {
    const { name, lastname, tel, email, message } = req.body;

    try {
        const respuesta = await resend.emails.send({
            from: "onboarding@resend.dev", // Email de prueba de Resend
            to: "mariavictoria.rios@gmail.com",
            subject: "Solicitar Asesoramiento",
            text: `Nombre: ${name}\nApellido: ${lastname}\nTelefono: ${tel}\nCorreo: ${email}\nMensaje: ${message}`
        });

        console.log("Correo enviado con éxito:", respuesta);
        res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el correo", error: error.message });
    }
}); */

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
