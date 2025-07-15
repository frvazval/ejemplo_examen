// Importar las dependencias
import express from "express";
import {connection} from "./mysql/mysql.js";

// Obtener el puerto del servidor
process.loadEnvFile();
const PORT = process.env.PORT || 5000;
// console.log(PORT);
const HOST = process.env.DB_HOST;

// Crear la aplicación
const app = express();

// RUTAS
app.get("/", (req, res) => {
    res.send("Aqui irá la página inicial");
});

app.get("/alumno", (req, res) => {
    const query = "SELECT * FROM alumno";
    connection.query(query, (err, result, fields) => {
        if(err) throw err;
        // console.log(result);
        res.json(result);
    })
});

app.get("/alumno/:apellido1", (req, res) => {
    const query = `SELECT * FROM alumno WHERE apellido1 LIKE "${req.params.apellido1}%" ORDER BY apellido1, apellido2`
    connection.query(query, (err, result, fields) => {
        if(err) throw err;        
        res.json(result);
    })
});

// 
app.listen(PORT, () => console.log(`Servidor abierto en http://${HOST}:${PORT}`));