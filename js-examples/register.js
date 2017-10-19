var form = document.getElementById("registerForm");
var message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    var validators = [nameValidator(), passwordValidator(), tosValidator()];

    for(var v of validators)
        if(!v.success) {
            event.preventDefault();
            message.innerText = v.message;
            break;
        }
});

function nameValidator() {
    var response = {};
    response["success"] = (/[a-z]/i).test(form.name.value.charAt(0));

    if(!response.success)
        response["message"] = "El nombre de usuario debe iniciar con letra";

    return response;
}

function tosValidator() {
    var response = {};
    response["success"] = form.acceptTOS.checked;

    if(!response.success)
        response["message"] = "Debes aceptar los términos y condiciones";

    return response;
}

function passwordValidator() {
    var response = {
        success : true
    };

    if(form.password.value.length < 8) {
        response.message = "Las contraseñas debe tener 8 carácteres";
        response.success = false;
    } else if(form.password.value != form.passwordConfirm.value) {
        response.message = "Las contraseñas no coinciden";
        response.success = false;
    }

    return response;
}