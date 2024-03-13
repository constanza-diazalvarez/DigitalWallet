document.addEventListener("DOMContentLoaded", function () {
    // Obtener los datos almacenados en localStorage
    var montoGuardado = localStorage.getItem("montoGuardado");
    var nombreContactoGuardado = localStorage.getItem("nombreContactoGuardado");

    // Verificar si hay datos guardados
    if (montoGuardado !== null && nombreContactoGuardado !== null) {
        // Crear un nuevo elemento <li> con los datos recuperados
        var nuevoMovimiento = document.createElement("li");
        nuevoMovimiento.className = "list-group-item";
        nuevoMovimiento.textContent = nombreContactoGuardado + " - $" + montoGuardado;

        // Agregar el nuevo elemento al final de la lista
        var listaMovimientos = document.querySelector(".list-group");
        listaMovimientos.appendChild(nuevoMovimiento);

        // Limpiar los datos almacenados en localStorage (opcional)
        localStorage.removeItem("montoGuardado");
        localStorage.removeItem("nombreContactoGuardado");
    }
});

document.getElementById("volverEnviar").addEventListener("click", function(){
    setTimeout(function(){
        window.location.href = "../html/sendmoney.html";
    }, 100);
});