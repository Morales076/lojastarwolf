var recebidos = JSON.parse(localStorage.getItem("@website/messangens")) || [];
var contato = document.getElementById("contato");


contato.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const info = Object.fromEntries(formData);
    localStorage.setItem("@ecckostudios/messagens", JSON.stringify(recebidos));

    contato.request();
    alert("Mensagem Enviada com sucesso");
});