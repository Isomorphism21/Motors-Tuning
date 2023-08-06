import { getFechasAll, postFechas } from "./API/API.js";

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar(){
    const id_motos = localStorage.getItem("_id");
    const datos = await getFechasAll();
    console.log(datos);
}

const formulario = document.querySelector("#formularioVarios");
formulario.addEventListener("submit", enviarDatos);

function enviarDatos(e){
    e.preventDefault();
    const fechass = document.querySelector("#fecha").value
    const descripcion = document.querySelector("#descripcion").value
    const detalle = document.querySelector("#detalle").value
    const acuerdos = document.querySelector("#acuerdos").value
    const kilometraje = document.querySelector("#kilometraje").value
    const moto = localStorage.getItem("_id");
    const fecha = {
        [fechass] : {
            descripcion,
            detalle,
            acuerdos,
            kilometraje
        },
        moto
    }
    console.log(fecha);
    if(validate(fecha)){
        alert("si pasa");
        /* postFechas(fecha); */
    }
}

function validate(objetos){
    return Object.values(objetos).every(element => element !== "");
}