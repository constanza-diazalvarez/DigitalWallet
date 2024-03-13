$("#formulario-datos").submit((event)=>{
    event.preventDefault();
    console.log('submit formulario');
    confirmarInicio();
})
function confirmarInicio(){
    const mailIngresado = $("#inputEmail").val();
    const contrasenaIngresado = $("#inputPassword").val();
    const mailUsuario = "usuario@abc.com";
    const contrasenaUsuario = "usuario123";
    if(mailIngresado === mailUsuario && contrasenaIngresado === contrasenaUsuario){
        window.location.href = 'menu.html';
    } else {
        let visibilidad = document.getElementsByClassName("d-none");
        visibilidad[0].classList.remove("d-none");
        visibilidad[0].classList.add("d-block");
    }
}