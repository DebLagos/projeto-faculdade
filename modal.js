
//pegando elemento html pelo id
var form_pagamento = document.getElementById("form-pagamento");
var modal = document.getElementById("modal");
form_pagamento.addEventListener("submit", function (evento) {
    //previni o evento padrao
    evento.preventDefault();
    modal.showModal();
})
var finalizar = document.getElementById("fechar");
finalizar.addEventListener("click", function (eveto) {
    modal.close();
})
