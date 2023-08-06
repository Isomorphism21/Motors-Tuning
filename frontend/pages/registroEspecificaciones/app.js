import { getFechas, getUserMoto, postFechas } from "./API/API.js";

document.addEventListener("DOMContentLoaded", iniciar);
document.addEventListener("DOMContentLoaded", iniciar2);

async function iniciar(){
    const id_motos = localStorage.getItem("_id");
    const datos = await getFechas(id_motos);
    console.log(id_motos);
    const acordion = document.querySelector(".contenedorSeguimiento");
    
    console.log(datos[0]);
    datos.forEach(element => {
        const {_id, fecha, descripcion, detalle, acuerdos, kilometraje} = element
        acordion.innerHTML += `
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button id="boton-iniciar" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${_id}" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>${fecha}</strong>
            </button>
          </h2>
          <div id="${_id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <p><strong>Descripcion:</strong>${descripcion}</p>
                <p><strong>Detalle:</strong>${detalle}</p>
                <p><strong>Acuerdos:</strong>${acuerdos}</p>
                <p><strong>Kilometraje:</strong>${kilometraje}</p>
            </div>
          </div>
        </div>
    </div>
        `
    });
}

async function iniciar2(){
  const id_motos = localStorage.getItem("_id");
  const datosUser = await getUserMoto(id_motos);
  const info = document.querySelector(".info");
  console.log(datosUser);
    info.innerHTML = `
      <p><strong>ID:</strong>${datosUser._id}</p>
      <p><strong>REFERENCIA:</strong>${datosUser.referenciaMoto}</p>
      <p><strong>DUEÑO:</strong>${datosUser.nombreCliente}</p>
      <p><strong>MATRICULA:</strong>${datosUser.matricula}</p>
      <p><strong>AÑO:</strong>${datosUser.año}</p>
      <p><strong>FECHA INGRESO:</strong>${datosUser.fechaIngreso}</p>
    `
  
}

const formulario = document.querySelector("#formularioVarios");
formulario.addEventListener("submit", enviarDatos);

function enviarDatos(e){
    e.preventDefault();
    const fecha = document.querySelector("#fecha").value
    const descripcion = document.querySelector("#descripcion").value
    const detalle = document.querySelector("#detalle").value
    const acuerdos = document.querySelector("#acuerdos").value
    const kilometraje = document.querySelector("#kilometraje").value
    const moto = localStorage.getItem("_id");
    const datos = {
        fecha,
        descripcion,
        detalle,
        acuerdos,
        kilometraje,
        moto
    }
    console.log(datos);
    if(validate(datos)){
        alert("si pasa");
        postFechas(datos); 
    } 
}

function validate(objetos){
    return Object.values(objetos).every(element => element !== "");
}