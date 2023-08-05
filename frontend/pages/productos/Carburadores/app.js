import { getCarburadoresAll, postCarburadores, deleteCarburadores, updCarburadoresOne, getCarburadoresOne, getUsuarioOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid
    const rolUsuario = await getUsuarioOne(usuarioId);
    const datos = await getCarburadoresAll();
    const tablas = document.querySelector(".listadoProductos");
    const thead = document.querySelector(".thead");
    const boton = document.querySelector(".titulo2");
    datos.forEach(element => {
        const {_id, Marca, Origen, Moto, Precio, ChiclerDeBaja, ChiclesDeAlta, Tipo, Stock} = element
        const {rol} = rolUsuario;
        if(rol == "ADMIN"){
            boton.innerHTML = `
            <div class="button-modal container-fluid" style="width: 50px; margin-right: 0px; margin-left: 20px;">
                <i class="plus bi bi-plus-circle fs-1 text-white" data-bs-toggle="modal"data-bs-target="#addCategorias" type="button" ></i>
            </div>
            `
            thead.innerHTML = `
            <tr class="encabezadoTabla">
                <th>ID</th>
                <th>MARCA</th>
                <th>ORIGEN</th>
                <th>MOTO</th>
                <th>PRECIO</th>
                <th>CHICLERB</th>
                <th>CHICLERA</th>
                <th>TIPO</th>
                <th>STOCK</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${Origen}</td>
                <td>${Moto}</td>
                <td>${Precio}</td>
                <td>${ChiclerDeBaja}</td>
                <td>${ChiclesDeAlta}</td>
                <td>${Tipo}</td>
                <td>${Stock}</td>
                <td><button class="btn btn-outline-danger delete" id="${_id}">Eliminar</button></td>
                <td><button class="btn btn-outline-warning edit" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}">Editar</button></td>
            </tr>` 
        }
        else if(rol == "VENTAS"){
            boton.innerHTML = ``
            thead.innerHTML = `
            <tr class="encabezadoTabla">
                <th>ID</th>
                <th>MARCA</th>
                <th>ORIGEN</th>
                <th>MOTO</th>
                <th>PRECIO</th>
                <th>CHICLERB</th>
                <th>CHICLERA</th>
                <th>TIPO</th>
                <th>STOCK</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${Origen}</td>
                <td>${Moto}</td>
                <td>${Precio}</td>
                <td>${ChiclerDeBaja}</td>
                <td>${ChiclesDeAlta}</td>
                <td>${Tipo}</td>
                <td>${Stock}</td>
            </tr>` 
        }
    });
}

const formulario = document.getElementById('formularioVarios');
formulario.addEventListener("submit", postDatos);


function postDatos(e){
  e.preventDefault();
  const Marca = document.querySelector('#Marca').value;
  const Origen = document.querySelector('#Origen').value;
  const Moto = document.querySelector('#Moto').value;
  const Precio  = document.querySelector('#Precio').value;
  const ChiclerDeBaja = document.querySelector('#ChiclerDeBaja').value;
  const ChiclesDeAlta = document.querySelector('#ChiclesDeAlta').value;
  const Tipo = document.querySelector('#Tipo').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Marca,
    Origen,
    Moto,
    Precio,
    ChiclerDeBaja,
    ChiclesDeAlta,
    Tipo,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postCarburadores(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_Carburadores = e.target.getAttribute("id");
        console.log(id_Carburadores);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteCarburadores(id_Carburadores);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_Carburadores = e.target.getAttribute("id");
        const datos = await getCarburadoresOne(id_Carburadores);
        console.log(datos);
        const Marca = document.querySelector("#MarcaEdit");
        const Origen = document.querySelector("#OrigenEdit");
        const Moto = document.querySelector("#MotoEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const ChiclerDeBaja = document.querySelector("#ChiclerDeBajaEdit");
        const ChiclesDeAlta = document.querySelector("#ChiclesDeAltaEdit");
        const Tipo = document.querySelector("#TipoEdit");
        const Stock = document.querySelector("#StockEdit");
        Marca.value = datos.Marca;
        Origen.value = datos.Origen;
        Moto.value = datos.Moto;
        Precio.value = datos.Precio;
        ChiclerDeBaja.value = datos.ChiclerDeBaja;
        ChiclesDeAlta.value = datos.ChiclesDeAlta;
        Tipo.value = datos.Tipo;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Marca = document.querySelector("#MarcaEdit").value
            const Origen = document.querySelector("#OrigenEdit").value
            const Moto = document.querySelector("#MotoEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const ChiclerDeBaja = document.querySelector("#ChiclerDeBajaEdit").value
            const ChiclesDeAlta = document.querySelector("#ChiclesDeAltaEdit").value
            const Tipo = document.querySelector("#TipoEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Marca,
                Origen,
                Moto,
                Precio,
                Marca,
                ChiclerDeBaja,
                ChiclesDeAlta,
                Tipo,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updCarburadoresOne(datosUpd, id_Carburadores);
            }
        }
    }
}


function validation(Objeto){
    return Object.values(Objeto).every(element => element !== '')
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};