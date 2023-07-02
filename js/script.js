let form = document.querySelector("form#formLogin");
let email = document.querySelector("input#inputEmail");
let password = document.querySelector("input#inputPassword2");
let submit = document.querySelector("button#submit");
let name = document.querySelector("input#inputName")


form.action = 'php/processar.php';
form.method = 'POST';

form.addEventListener('submit', function (event) {
    event.preventDefault();
})
