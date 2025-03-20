import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Variables de entorno
const dbUri = "mongodb+srv://evolfusion_arg:evolfusion_arg2025%25@evolfusionarg.av3zz.mongodb.net/?retryWrites=true&w=majority&appName=EvolfusionArg";



console.log("Intentando conectar a MongoDB...");

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
  })
  .catch(err => {
    console.error('❌ Error de conexión:', err);
    process.exit(1);  // Termina el proceso si no puede conectar
  });
