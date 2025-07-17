// Obtener el formulario
const formApellidoLetra = document.getElementById("formApellidoLetra");

// Obtener lo que hay escrito en el input text
formApellidoLetra.addEventListener('submit', (e) => {
    e.preventDefault();
    let iniciales = document.getElementById('letras-apellido').value;
    iniciales = "/alumnos/" + iniciales;
    window.location.href = iniciales;
})