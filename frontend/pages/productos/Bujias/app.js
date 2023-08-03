import { getBujiasAll, postBujias, deleteBujias, updBujiasOne, getBujiasOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getBujiasAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Tipo, Referencia, Marca, Precio, Stock} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Tipo}</td>
            <td>${Referencia}</td>
            <td>${Precio}</td>
            <td>${Marca}</td>
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
  const Tipo = document.querySelector('#Tipo').value;
  const Referencia = document.querySelector('#Referencia').value;
  const Precio  = document.querySelector('#Precio').value;
  const Marca = document.querySelector('#Marca').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Tipo,
    Referencia,
    Precio,
    Marca,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postBujias(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Bujias = e.target.getAttribute("id");
        console.log(id_Bujias);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteBujias(id_Bujias);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Bujias = e.target.getAttribute("id");
        const datos = await getBujiasOne(id_Bujias);
        console.log(datos);
        const Tipo = document.querySelector("#TipoEdit");
        const Referencia = document.querySelector("#ReferenciaEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Marca = document.querySelector("#MarcaEdit");
        const Stock = document.querySelector("#StockEdit");
        Tipo.value = datos.Tipo;
        Referencia.value = datos.Referencia;
        Marca.value = datos.Marca;
        Precio.value = datos.Precio;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Tipo = document.querySelector("#TipoEdit").value
            const Referencia = document.querySelector("#ReferenciaEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Marca = document.querySelector("#MarcaEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Tipo,
                Referencia,
                Precio,
                Marca,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updBujiasOne(datosUpd, id_Bujias);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }