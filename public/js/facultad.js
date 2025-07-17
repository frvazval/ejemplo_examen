// Obtener el formulario
const formApellidoLetra = document.getElementById("formApellidoLetra");

// Obtener lo que hay escrito en el input text
formApellidoLetra.addEventListener('submit', (e) => {
    e.preventDefault();
    let iniciales = document.getElementById('letras-apellido').value;
    iniciales = "/alumnos/" + iniciales;
    window.location.href = iniciales;
})

const formAsignaturasProfesor = document.getElementById("formAsignaturasProfesor");

formAsignaturasProfesor.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre-profesor').value;
    let apellido = document.getElementById('apellido-profesor').value;
    let ruta = "/profesor/" + nombre + "/" + apellido;
    window.location.href = ruta;

})