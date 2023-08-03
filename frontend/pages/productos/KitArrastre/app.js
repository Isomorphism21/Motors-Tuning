import { getKitArrastreAll, postKitArrastre, deleteKitArrastre, updKitArrastreOne, getKitArrastreOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getKitArrastreAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Marca, MaterialDeLaCorona, Moto, Precio, CantidadDeDientesDeLaCorona, LargoDeLaCadena, CantidadDeDientesDelPiñón, Stock} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Marca}</td>
            <td>${MaterialDeLaCorona}</td>
            <td>${Moto}</td>
            <td>${Precio}</td>
            <td>${CantidadDeDientesDeLaCorona}</td>
            <td>${LargoDeLaCadena}</td>
            <td>${CantidadDeDientesDelPiñón}</td>
            <td>${Stock}</td>
            <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
            <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}">Editar</button></td>
        </tr>` 
    });
}

const formulario = document.getElementById('formularioVarios');
formulario.addEventListener("submit", postDatos);


function postDatos(e){
  e.preventDefault();
  const Marca = document.querySelector('#Marca').value;
  const MaterialDeLaCorona = document.querySelector('#MaterialDeLaCorona').value;
  const Moto = document.querySelector('#Moto').value;
  const Precio  = document.querySelector('#Precio').value;
  const CantidadDeDientesDeLaCorona = document.querySelector('#CantidadDeDientesDeLaCorona').value;
  const LargoDeLaCadena = document.querySelector('#LargoDeLaCadena').value;
  const CantidadDeDientesDelPiñón = document.querySelector('#CantidadDeDientesDelPiñón').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Marca,
    MaterialDeLaCorona,
    Moto,
    Precio,
    CantidadDeDientesDeLaCorona,
    LargoDeLaCadena,
    CantidadDeDientesDelPiñón,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postKitArrastre(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_KitArrastre = e.target.getAttribute("id");
        console.log(id_KitArrastre);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteKitArrastre(id_KitArrastre);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_KitArrastre = e.target.getAttribute("id");
        const datos = await getKitArrastreOne(id_KitArrastre);
        console.log(datos);
        const Marca = document.querySelector("#MarcaEdit");
        const MaterialDeLaCorona = document.querySelector("#MaterialDeLaCoronaEdit");
        const Moto = document.querySelector("#MotoEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const CantidadDeDientesDeLaCorona = document.querySelector("#CantidadDeDientesDeLaCoronaEdit");
        const LargoDeLaCadena = document.querySelector("#LargoDeLaCadenaEdit");
        const CantidadDeDientesDelPiñón = document.querySelector("#CantidadDeDientesDelPiñónEdit");
        const Stock = document.querySelector("#StockEdit");
        Marca.value = datos.Marca;
        MaterialDeLaCorona.value = datos.MaterialDeLaCorona;
        Moto.value = datos.Moto;
        Precio.value = datos.Precio;
        CantidadDeDientesDeLaCorona.value = datos.CantidadDeDientesDeLaCorona;
        LargoDeLaCadena.value = datos.LargoDeLaCadena;
        CantidadDeDientesDelPiñón.value = datos.CantidadDeDientesDelPiñón;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Marca = document.querySelector("#MarcaEdit").value
            const MaterialDeLaCorona = document.querySelector("#MaterialDeLaCoronaEdit").value
            const Moto = document.querySelector("#MotoEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const CantidadDeDientesDeLaCorona = document.querySelector("#CantidadDeDientesDeLaCoronaEdit").value
            const LargoDeLaCadena = document.querySelector("#LargoDeLaCadenaEdit").value
            const CantidadDeDientesDelPiñón = document.querySelector("#CantidadDeDientesDelPiñónEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Marca,
                MaterialDeLaCorona,
                Moto,
                Precio,
                Marca,
                CantidadDeDientesDeLaCorona,
                LargoDeLaCadena,
                CantidadDeDientesDelPiñón,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updKitArrastreOne(datosUpd, id_KitArrastre);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }