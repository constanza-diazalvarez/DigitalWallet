const usuarioValido = "usuario123";
const contrasenaValida = "claveSecreta";

let usuarioIngresado = prompt("Ingrese usuario: ");
let contrasenaIngresada = prompt("Ingrese contraseña: ");

function inicioSesion(usuarioIngresado, contrasenaIngresada){
    if ((usuarioValido === usuarioIngresado) && (contrasenaValida === contrasenaIngresada)){
        console.log("Usuario válido");
    } else {
        console.error("El usuario no es válido");
    }
}
inicioSesion(usuarioIngresado, contrasenaIngresada);