document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("botonDepositar").addEventListener("click", function(){
        let valor = parseInt(document.getElementById("valor-deposito").value);
        var balanceValor = (parseInt(localStorage.getItem("balance")) || 0) + valor;
        console.log(balanceValor);
        localStorage.setItem("balance", balanceValor);
        window.location.href = "menu.html"
    });
});