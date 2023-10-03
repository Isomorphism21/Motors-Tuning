import { postFactura, traerFactura, traerMoto, traerUsuario } from "./API/API.js";
const motoID = localStorage.getItem("_id");
const empleado = localStorage.getItem("token");

document.addEventListener("DOMContentLoaded", iniciar);
document.addEventListener("DOMContentLoaded", registroFacturas);

async function iniciar(){
    const datos = await traerMoto(motoID);
    const cardBody = document.querySelector(".card-body");
    cardBody.innerHTML = `
        <h5 class="card-title">${datos.matricula}</h5>
        <p><strong>ID:</strong>${datos._id}</p>
        <p><strong>REFERENCIA:</strong>${datos.referenciaMoto}</p>
        <p><strong>AÑO:</strong>${datos.año}</p>
        <p><strong>FECHA INGRESO:</strong>${datos.fechaIngreso}</p>
        <p><strong>DUEÑO:</strong>${datos.nombreCliente}</p>
    `
}

async function registroFacturas(){
    const moto = await traerMoto(motoID);
    const empleadoToken = parseJwt(empleado);
    const empleadoInfo = await traerUsuario(empleadoToken.uid) 
    const factura = await traerFactura(motoID);
    console.log(moto);
    console.log(empleadoInfo);
    console.log(factura[0]);
    const contenedor = document.querySelector(".contenedorAcordeon");
    factura.forEach(element => {
        const {_id, descripcion, costo, fecha, cajero} = element;
        contenedor.innerHTML += `
        <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${_id}" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                ${fecha}
            </button>
        </h2>
        <div id="${_id}" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <p><strong>Descripcion</strong>${descripcion}</p>
                <p><strong>Costo</strong>${costo}</p>
                <p><strong>Cliente</strong>${moto.nombreCliente}</p>
                <p><strong>Matricula</strong>${moto.matricula}</p>
                <p><strong>Cajero</strong>${cajero}</p>
            </div>
        </div>
        </div>
    </div>
    `
    });
}

const formulario = document.querySelector("#formularioVarios");
formulario.addEventListener("submit", enviarDatos)

async function enviarDatos(e){
        e.preventDefault();
        const empleadoToken2 = parseJwt(empleado);
        const descripcion = document.querySelector("#descripcion").value;
        const costo = document.querySelector("#costo").value;
        const fecha = document.querySelector("#fecha").value;
        const empleadoToken = empleadoToken2.uid;
        const motoInfo = motoID 
        const cajeroName = await traerUsuario(empleadoToken)
        const cajero = cajeroName.nombre;
        console.log(cajeroName);
    
        const datos = {
            descripcion,
            costo,
            fecha,
            empleado: empleadoToken,
            matricula: motoInfo,
            cajero
        }
        console.log(datos);
        if(validate(datos)){
            alert("¡Se ha geneado la factura satisfactoriamente!");
            postFactura(datos);
            console.log(datos);
            window.location.href = "index.html" 
        }else{
            alert("no pasa");
        }
}

function validate(objeto){
    return Object.values(objeto).every(element => element != "");
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};