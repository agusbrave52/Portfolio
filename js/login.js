function loguear() { // Creo la funcion para poder loguear() para terminar de verificar y loguearse
    let usuario = document.getElementById("usuario"); //traigo datos del input usuario
    let contrasena = document.getElementById("contrasena"); //traigo datos del input contraseña
    
    if (usuario.checkValidity() && contrasena.checkValidity()) { //valido con la funcion checkValidity() que verifica las validaciones del HTML y devuelve un booleano
        sessionStorage.setItem("Usuario", usuario.value);//Guardo el valor de campo usuario en sessionStorage
        window.location = "home.html" //redirijo la pagina a home
    }
    else {
        if (usuario.checkValidity() == false) { //hago unos if para cambiar el mensaje de error del usuario y mas abajo contraseña
            let error = document.getElementById("msContrasena");
            error.innerHTML = usuario.validationMessage + ": Usuario";
        }
        else {
            if (contrasena.checkValidity() == false) {
                let error = document.getElementById("msContrasena");
                error.innerHTML = contrasena.validationMessage + ": Contraseña";
            }
        }
    }
}
