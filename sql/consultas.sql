use facultad;

SELECT * FROM alumno;

SELECT * FROM alumno WHERE apellido1 LIKE "G%" ORDER BY apellido1, apellido2;

SELECT a.nombre
FROM profesor p 
NATURAL JOIN impartir i 
INNER JOIN asignatura a ON i.idAsignatura = a.idAsignatura
WHERE p.nombre = "David" AND p.apellido1 = "Serna";



 