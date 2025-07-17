// Importar las dependencias
import express from "express";
import {connection} from "./mysql/mysql.js";

// Obtener el puerto del servidor
process.loadEnvFile();
const PORT = process.env.PORT || 5000;
// console.log(PORT);

// Crear la aplicación
const app = express();

// Ruta de los ficheros estaticos
app.use(express.static(process.cwd() + "/public"));

// RUTAS
app.get("/", (req, res) => {
    res.sendFile("index.html");
    // res.send("Aqui irá la página inicial");
});

app.get("/alumnos", (req, res) => {
    const query = "SELECT * FROM alumno";
    connection.query(query, (err, result, fields) => {
        if(err) throw err;
        // console.log(result);
        res.json(result);
    })
});

app.get("/alumnos/:apellido1", (req, res) => {
    const query = `SELECT * FROM alumno WHERE apellido1 LIKE "${req.params.apellido1}%" ORDER BY apellido1, apellido2`
    connection.query(query, (err, result, fields) => {
        if(err) throw err;
        if (result.length == 0) {
            return res.status(404).json({"mensaje": "Alumno no encontrado"});
        };       
        res.json(result);
    })
});

// apellidoProfe/nombreProfe -> nombre, apellido, asignaturas
// {"nombre_profesor": "Rafael","apellido_profesor": "Murcia", "asignaturas": ["x", "y", "z", ...]}
app.get("/profesor/:nombre/:apellido", (req, res) => {
    const query = `
    SELECT a.nombre
    FROM profesor p 
    NATURAL JOIN impartir i 
    INNER JOIN asignatura a ON i.idAsignatura = a.idAsignatura
    WHERE p.nombre = ${req.params.nombre} AND p.apellido1 = ${req.params.apellido}
    `;

    connection.query(query, (err, result) => {
        if(err) throw err;
        if (result.length == 0) {
            return res.status(404).json({"mensaje": "Profesor no encontrado"});
        };  
        res.json(result);
    })
});


// Ruta 404
app.use((req, res) => {
    Res.status(404).send("<h1>Página no encontrada</h1>"); 
});

app.listen(PORT, () => console.log(`Servidor abierto en http://localhost:${PORT}`));