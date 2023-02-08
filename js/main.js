$(document).ready(function() {

    $("#telefone").mask("(00) 00000-0000");

    $("#cpf").mask("000.000.000-00");

    $("#cep").mask("00000-000");

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
            email: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
            telefone: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
            cpf: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
            endereco: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
            cep: "<p class='obrigatorio'>Este campo é obrigatório.</p>",
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

})