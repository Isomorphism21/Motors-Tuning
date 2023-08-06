import { getMotos } from "./API/API.js";

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar(){
    const datos = await getMotos();
    const contenedorCards = document.querySelector(".gridCards");
    datos.forEach(element => {
        const {_id, referenciaMoto, nombreCliente, matricula, año, fechaIngreso} = element
        contenedorCards.innerHTML += `
            <div class="card" style="width: 20rem;">
            <img src="./img/r6-negro2.png" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${matricula}</h5>
            <p><strong>ID:</strong>${_id}</p>
            <p><strong>REFERENCIA:</strong>${referenciaMoto}</p>
            <p><strong>AÑO:</strong>${año}</p>
            <p><strong>FECHA INGRESO:</strong>${fechaIngreso}</p>
            <p><strong>DUEÑO:</strong>${nombreCliente}</p>
            </div>
            <div>
            </div>
            <div class="contenedorBoton">
                <div class="boton">
                    <button id="${_id}">Registro</button>
                </div>
            </div>
        </div>
        `
    });
}

const contenedorBotonID = document.querySelector(".gridCards");

contenedorBotonID.addEventListener("click", localStorageID);

async function localStorageID(e){
    const idLocal = e.target.getAttribute("id")
    localStorage.removeItem("_id");
    const idMotos = localStorage.setItem("_id", idLocal);
    console.log(idMotos);
}