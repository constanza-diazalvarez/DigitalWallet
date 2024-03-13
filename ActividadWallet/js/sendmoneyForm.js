//funcionalidad de cada elemento <li> (contactos)
function enviarDinero() {
    var selectedContact = $("#contactList li.active");

    if (selectedContact.length > 0) {
        var name = selectedContact.find(".contact-name").text();
        var details = selectedContact.find(".contact-details").text();

        document.getElementById("nombreContacto").innerText = name;
        console.log("Enviar dinero a: " + name);
        console.log("Detalles: " + details);
    } else {
        console.log("Selecciona un contacto antes de enviar dinero.");
        alert("Selecciona un contacto antes de enviar dinero.");
    }
}

// Agregar active al hacer clic
$("#contactList li").click(function() {
    $(this).toggleClass("active").siblings().removeClass("active");
});

//monto que se va a depositar
var formulario = document.getElementById("formularioSend");
var balanceValor = parseInt(localStorage.getItem("balance")) || 0;

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var monto = document.getElementById("monto").value;
    localStorage.setItem("montoGuardado", monto);
    var nombreContactoElemento = document.getElementById("nombreContacto").textContent;
    localStorage.setItem("nombreContactoGuardado", nombreContactoElemento)
    nombreContactoElemento.textContent = "Monto guardado: " + monto;
    window.location.href = "transactions.html"
});
//resta el monto del balance
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botonEnviar").addEventListener("click", function(){
        var monto = document.getElementById("monto").value;
        var balanceValor = (parseInt(localStorage.getItem("balance")) || 0) - monto;
        console.log(balanceValor);
        localStorage.setItem("balance", balanceValor);
     });
 });

//Guardar el contacto
document.addEventListener("DOMContentLoaded", function() {
    var botonGuardarContacto = document.getElementById("botonGuardarContacto");

    botonGuardarContacto.addEventListener("click", function() {

        console.log("Botón Guardar Contacto");

        var nombreApellido = document.getElementById("nombreApellido").value;
        var numeroCuenta = document.getElementById("numeroCuenta").value;
        var alias = document.getElementById("alias").value;
        var banco = document.getElementById("banco").value;

        console.log("Nombre completo:", nombreApellido);
        console.log("Número de cuenta:", numeroCuenta);
        console.log("Alias:", alias);
        console.log("Banco:", banco);

        // Crear un nuevo elemento <li>
        var nuevoContacto = document.createElement("li");
        nuevoContacto.className = "list-group-item";
        nuevoContacto.addEventListener("click", function() {
            //Hay que agregarle la funcionalidad del codigo de arriba o si no no lo toma
            $(this).toggleClass("active").siblings().removeClass("active");
        });

        nuevoContacto.innerHTML = `
            <div class="contact-info">
                <span class="contact-name">${nombreApellido}</span>
                <br>
                <span class="contact-details">${banco} <br> ${numeroCuenta} <br> Alias: ${alias}</span>
            </div>
        `;

        var contactList = document.getElementById("contactList");
        contactList.appendChild(nuevoContacto);

        //No consegui hacer que el modal se cerrara de forma automatica, asi que hay que cerrarlo de forma manual no mas :c
        //El contacto nuevo tampoco lo pude almacenar con local storage asi que se pierde
    });
});
