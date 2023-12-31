
//------------------------------Modal----------------------------------------

var modal_de_agendamento = document.getElementById("modal_de_agendamento");
var modal_ver_detalhes = document.getElementById("modal_ver_detalhe");
var modal_cancelar = document.getElementById("modal_cancelar");
var modal_enviar = document.getElementById("modal_enviar");
var modal_saiba_mais = document.getElementById("modal_saiba_mais");
var modal_senha = document.getElementById("modal_senha");

//------------------------------Fechar-------------------------------------------

var btn_fechar = document.getElementsByClassName("js-fechar");

if (btn_fechar.length > 0) {
    for (i = 0; i < btn_fechar.length; i++) {
        btn_fechar[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();

            const modal = evento.target.closest('dialog');
            modal.close();
        })
    }
}







//--------------------------------------------------------------Abrir Modal--------------------------------------------------------------

//pegando elemento html pelo id (um unico elemento)
var form_de_agendamento = document.getElementById("form-de-agendamento");

if (form_de_agendamento) {
    form_de_agendamento.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_de_agendamento.showModal();
    })
}

var form_contato = document.getElementById("form-contato");

if (form_contato) {
    form_contato.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_enviar.showModal();
    })
}



var form_redefinir_senha = document.getElementById("form-redefinir-senha");

if (form_redefinir_senha) {
    form_redefinir_senha.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_senha.showModal();
    })
}


//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_ver_detalhes = document.getElementsByClassName("js-ver-detalhes");
//se encontrar pelo menos um elemento
if (btn_ver_detalhes.length > 0) {


    //entra na repetição pegando elementos da lista 
    for (i = 0; i < btn_ver_detalhes.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click
        btn_ver_detalhes[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();
            modal_ver_detalhe.showModal();
        })
    }

}



//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_cancelar = document.getElementsByClassName("js-cancelar");
//se encontrar pelo menos um elemento
if (btn_cancelar.length > 0) {


    //entra na repetição pegando elementos da lista 
    for (i = 0; i < btn_cancelar.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click
        btn_cancelar[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();
            modal_cancelar.showModal();
        })
    }

}


//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_saiba_mais = document.getElementsByClassName("js-saiba-mais");
//se encontrar pelo menos um elemento
if (btn_saiba_mais.length > 0) {


    // entra na repetição pegando elementos da lista//
    for (i = 0; i < btn_saiba_mais.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click//
        btn_saiba_mais[i].addEventListener("click", function (evento) {
            //previni o evento padrao//
            evento.preventDefault();
            modal_saiba_mais.showModal();
        })
    }



}
