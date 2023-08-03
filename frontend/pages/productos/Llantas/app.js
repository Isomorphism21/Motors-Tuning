import { getLlantasAll, postLlantas, deleteLlantas, updLlantasOne, getLlantasOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const datos = await getLlantasAll();
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    datos.forEach(element => {
        const {_id, Tipo, Ubicacion, Ancho, Perfil, Carga, Precio, Marca, Stock} = element
        tablas.innerHTML += `
        <tr>
            <th scope="row">${_id}</th>
            <td>${Tipo}</td>
            <td>${Ubicacion}</td>
            <td>${Ancho}</td>
            <td>${Perfil}</td>
            <td>${Carga}</td>
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
  const Ubicacion = document.querySelector('#Ubicacion').value;
  const Ancho = document.querySelector('#Ancho').value;
  const Perfil  = document.querySelector('#Perfil').value;
  const Carga = document.querySelector('#Carga').value;
  const Precio = document.querySelector('#Precio').value;
  const Marca = document.querySelector('#Marca').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Tipo,
    Ubicacion,
    Ancho,
    Perfil,
    Carga,
    Precio,
    Marca,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postLlantas(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Llantas = e.target.getAttribute("id");
        console.log(id_Llantas);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteLlantas(id_Llantas);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Llantas = e.target.getAttribute("id");
        const datos = await getLlantasOne(id_Llantas);
        console.log(datos);
        const Tipo = document.querySelector("#TipoEdit");
        const Ubicacion = document.querySelector("#UbicacionEdit");
        const Ancho = document.querySelector("#AnchoEdit");
        const Perfil = document.querySelector("#PerfilEdit");
        const Carga = document.querySelector("#CargaEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Marca = document.querySelector("#MarcaEdit");
        const Stock = document.querySelector("#StockEdit");
        Tipo.value = datos.Tipo;
        Ubicacion.value = datos.Ubicacion;
        Ancho.value = datos.Ancho;
        Perfil.value = datos.Perfil;
        Carga.value = datos.Carga;
        Precio.value = datos.Precio;
        Marca.value = datos.Marca;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Tipo = document.querySelector("#TipoEdit").value
            const Ubicacion = document.querySelector("#UbicacionEdit").value
            const Ancho = document.querySelector("#AnchoEdit").value
            const Perfil = document.querySelector("#PerfilEdit").value
            const Carga = document.querySelector("#CargaEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Marca = document.querySelector("#MarcaEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Tipo,
                Ubicacion,
                Ancho,
                Perfil,
                Tipo,
                Carga,
                Precio,
                Marca,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updLlantasOne(datosUpd, id_Llantas);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
  }