import { postMotos } from "./API/API.js";

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", enviarMoto);

function enviarMoto(e){
    e.preventDefault();
    const referenciaMoto = document.querySelector("#referencia").value;
    const nombreCliente = document.querySelector("#name").value;
    const matricula = document.querySelector("#matricula").value;
    const año = document.querySelector("#año").value;
    const fechaIngreso = document.querySelector("#fecha").value;

    const datos = {
        referenciaMoto,
        nombreCliente,
        matricula,
        año,
        fechaIngreso
    }
    if(validation(datos)){
        alert("si pasa")
        postMotos(datos);
        window.location.href = "../registroMotosCards/index.html";
    }else(
        alert("no pasa")
    )
    console.log(datos);
}

function validation(objeto){
    return Object.values(objeto).every(element => element != "");
}