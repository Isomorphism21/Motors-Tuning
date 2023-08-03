import { getBielasAll, postBielas, deleteBielas, updBielasOne, getBielasOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getBielasAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Nombre, Cilindraje, Garantia, Precio, Stock} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Nombre}</td>
            <td>${Cilindraje}</td>
            <td>${Precio}</td>
            <td>${Garantia}</td>
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
  const Nombre = document.querySelector('#Nombre').value;
  const Cilindraje = document.querySelector('#Cilindraje').value;
  const Precio  = document.querySelector('#Precio').value;
  const Garantia = document.querySelector('#Garantia').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Nombre,
    Cilindraje,
    Precio,
    Garantia,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postBielas(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Bielas = e.target.getAttribute("id");
        console.log(id_Bielas);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteBielas(id_Bielas);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Bielas = e.target.getAttribute("id");
        const datos = await getBielasOne(id_Bielas);
        console.log(datos);
        const Nombre = document.querySelector("#NombreEdit");
        const Cilindraje = document.querySelector("#CilindrajeEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Garantia = document.querySelector("#GarantiaEdit");
        const Stock = document.querySelector("#StockEdit");
        Nombre.value = datos.Nombre;
        Cilindraje.value = datos.Cilindraje;
        Garantia.value = datos.Garantia;
        Precio.value = datos.Precio;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Nombre = document.querySelector("#NombreEdit").value
            const Cilindraje = document.querySelector("#CilindrajeEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Garantia = document.querySelector("#GarantiaEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Nombre,
                Cilindraje,
                Precio,
                Garantia,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updBielasOne(datosUpd, id_Bielas);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }