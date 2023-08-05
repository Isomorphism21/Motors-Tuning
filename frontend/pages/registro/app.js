import { postUsers } from "./API/API.js";

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", iniciar);

function iniciar(e){
    e.preventDefault();
    const nombre = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const rol = document.querySelector("#rol").value;

    const datos = {
        nombre,
        email,
        password,
        rol
    }
    console.log(datos);
    if(validate(datos)){
        alert("Se ha registrado el usuario");
        postUsers(datos);
        window.location.href = "../login/index.html"
    }else{
        alert("Datos ingresados no validos");
    }
}

function validate(objeto){
    return Object.values(objeto).every(element => element !== "");
}
