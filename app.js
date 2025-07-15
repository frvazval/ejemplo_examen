// Importar las dependencias
import express from "express";
import {connection} from "./mysql/mysql.js";

// Obtener el puerto del servidor
process.loadEnvFile();
const PORT = process.env.PORT || 5000;
console.log(PORT);

// Crear la aplicación
const app = express();

// 