import { getAceiteAll, postAceite, deleteAceite, updAceiteOne, getAceiteOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getAceiteAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Marca, Tipo, Referencia, Precio, Viscosidad, Stock} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Marca}</td>
            <td>${Tipo}</td>
            <td>${Referencia}</td>
            <td>${Precio}</td>
            <td>${Viscosidad}</td>
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
  const Tipo = document.querySelector('#Tipo').value;
  const Referencia  = document.querySelector('#Referencia').value;
  const Precio = document.querySelector('#Precio').value;
  const Viscosidad = document.querySelector('#Viscosidad').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Marca,
    Tipo,
    Referencia,
    Precio,
    Viscosidad,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postAceite(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Aceite = e.target.getAttribute("id");
        console.log(id_Aceite);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteAceite(id_Aceite);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Aceite = e.target.getAttribute("id");
        const datos = await getAceiteOne(id_Aceite);
        console.log(datos);
        const Marca = document.querySelector("#MarcaEdit");
        const Tipo = document.querySelector("#TipoEdit");
        const Referencia = document.querySelector("#ReferenciaEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Viscosidad = document.querySelector("#ViscosidadEdit");
        const Stock = document.querySelector("#StockEdit");
        Marca.value = datos.Marca;
        Tipo.value = datos.Tipo;
        Referencia.value = datos.Referencia;
        Precio.value = datos.Precio;
        Viscosidad.value = datos.Viscosidad;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Marca = document.querySelector("#MarcaEdit").value
            const Tipo = document.querySelector("#TipoEdit").value
            const Referencia = document.querySelector("#ReferenciaEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Viscosidad = document.querySelector("#ViscosidadEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Marca,
                Tipo,
                Referencia,
                Precio,
                Viscosidad,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updAceiteOne(datosUpd, id_Aceite);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }