const contactForm = document.querySelector('.contact-form'); //associando uma variavel com formulario contato

//declarando variaveis e associando ao formulario
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => { //funcao de acao do botao enviar formulario
    e.preventDefault();

    let formData = { //funcao recebe valores do formulario
        nome: nome.value,
        email: email.value,
        message: message.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email enviado !');
            nome.value = '';
            email.value = '';
            message.value = '';
        } else {

            alert('algo deu errado!');
        }
    }
    xhr.send(JSON.stringify(formData));

})

console.log(nome)