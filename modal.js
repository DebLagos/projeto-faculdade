
//------------------------------Modal----------------------------------------

var modal_pagamento = document.getElementById("modal_pagamento");
var modal_ver_detalhes = document.getElementById("modal_ver_detalhe");
var modal_cancelar = document.getElementById("modal_cancelar");
var modal_enviar = document.getElementById("modal_enviar");


//------------------------------Fechar-------------------------------------------

var btn_fechar = document.getElementsByClassName("fechar");

if (btn_fechar.length > 0) {

    for (i = 0; i < btn_fechar.length; i++) {
        btn_fechar[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();


            if (modal_cancelar) {
                modal_cancelar.close();
            }

            if (modal_ver_detalhes) {
                modal_ver_detalhes.close();
            }

            if (modal_pagamento) {
                modal_pagamento.close();
            }
            if (modal_enviar) {
                modal_enviar.close();
            }


        })
    }
}







//--------------------------------------------------------------Abrir Modal--------------------------------------------------------------

//pegando elemento html pelo id (um unico elemento)
var form_pagamento = document.getElementById("form-pagamento");

if (form_pagamento) {
    form_pagamento.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_pagamento.showModal();
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
var form_contato = document.getElementById("form-contato");

if (form_contato) {
    form_contato.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_enviar.showModal();
    })
}


