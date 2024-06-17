if (localStorage.getItem("token")==null){
    alert("Você precisa de uma login para continuar na página de Compras.");
    window.location.href = "login.html";
}
let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector('#logado');
logado.innerHTML = 'Olá ${userLogado.nome}';

function sair() {
    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")
    window.location.href = "login.html";
}