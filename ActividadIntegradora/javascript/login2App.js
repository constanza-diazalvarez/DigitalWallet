const usuarioMail = "abc@abc.com";
const usuarioContrasena = "123abc";

function validarInicio() {
    var mail = document.getElementById('email');
    var contrasena = document.getElementById('contrasena');

    const mailLargo = mail.innerHTML.length;
    const contrasenaLargo = contrasena.innerHTML.length;

    if (mailLargo > 0 && contrasenaLargo > 0){
        if ( usuarioMail === mail && usuarioContrasena === contrasena){
            alert("¡Bienvenido!");
        } else {
            alert("Datos erroneos.");
        }

    } else {
        alert("Por favor, completa todos los campos.");
    }
}