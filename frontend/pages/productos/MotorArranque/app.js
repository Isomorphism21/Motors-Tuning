import { getMotorArranqueAll, postMotorArranque, deleteMotorArranque, updMotorArranqueOne, getMotorArranqueOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getMotorArranqueAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Voltaje, Precio, Marca, Stock, DientesDeBendix} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Voltaje}</td>
            <td>${Precio}</td>
            <td>${Marca}</td>
            <td>${Stock}</td>
            <td>${DientesDeBendix}</td>
            <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
            <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}">Editar</button></td>
        </tr>` 
    });
}

const formulario = document.getElementById('formularioVarios');
formulario.addEventListener("submit", postDatos);


function postDatos(e){
  e.preventDefault();
  const Voltaje = document.querySelector('#Voltaje').value;
  const Precio = document.querySelector('#Precio').value;
  const Marca  = document.querySelector('#Marca').value;
  const Stock = document.querySelector('#Stock').value;
  const DientesDeBendix  = document.querySelector('#DientesDeBendix').value;
  
  const registro = {
    Voltaje,
    Precio,
    Marca,
    Stock,
    DientesDeBendix
  }
  console.log(registro);

  if(validation(registro)){
    postMotorArranque(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_MotorArranque = e.target.getAttribute("id");
        console.log(id_MotorArranque);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteMotorArranque(id_MotorArranque);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_MotorArranque = e.target.getAttribute("id");
        const datos = await getMotorArranqueOne(id_MotorArranque);
        console.log(datos);
        const Voltaje = document.querySelector("#VoltajeEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Marca = document.querySelector("#MarcaEdit");
        const Stock = document.querySelector("#StockEdit");
        const DientesDeBendix = document.querySelector("#DientesDeBendixEdit");
        Voltaje.value = datos.Voltaje;
        Precio.value = datos.Precio;
        Marca.value = datos.Marca;
        Stock.value = datos.Stock;
        DientesDeBendix.value = datos.DientesDeBendix;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Voltaje = document.querySelector("#VoltajeEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Marca = document.querySelector("#MarcaEdit").value
            const Stock = document.querySelector("#StockEdit").value
            const DientesDeBendix = document.querySelector("#DientesDeBendixEdit").value

            const datosUpd = {
                Voltaje,
                Precio,
                Marca,
                Stock,
                DientesDeBendix
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updMotorArranqueOne(datosUpd, id_MotorArranque);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }