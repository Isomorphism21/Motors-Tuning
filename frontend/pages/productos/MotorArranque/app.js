import { getMotorArranqueAll, postMotorArranque, deleteMotorArranque, updMotorArranqueOne, getMotorArranqueOne, getUsuarioOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid
    const rolUsuario = await getUsuarioOne(usuarioId);
    const datos = await getMotorArranqueAll();
    const tablas = document.querySelector(".listadoProductos");
    const thead = document.querySelector(".thead");
    const boton = document.querySelector(".titulo2");
    datos.forEach(element => {
        const {_id, Voltaje, Precio, Marca, Stock, DientesDeBendix} = element
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
                <th>VOLTAJE</th>
                <th>PRECIO</th>
                <th>DIENTESDEBENDIX</th>
                <th>STOCK</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${Voltaje}</td>
                <td>${Precio}</td>
                <td>${DientesDeBendix}</td>
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
                <th>VOLTAJE</th>
                <th>PRECIO</th>
                <th>DIENTESDEBENDIX</th>
                <th>STOCK</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${Voltaje}</td>
                <td>${Precio}</td>
                <td>${DientesDeBendix}</td>
                <td>${Stock}</td>
            </tr>` 
        }
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

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};