import { getPastillasFrenoAll, postPastillasFreno, deletePastillasFreno, updPastillasFrenoOne, getPastillasFrenoOne, getUsuarioOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid
    const rolUsuario = await getUsuarioOne(usuarioId);
    const datos = await getPastillasFrenoAll();
    const tablas = document.querySelector(".listadoProductos");
    const thead = document.querySelector(".thead");
    const boton = document.querySelector(".titulo2");
    datos.forEach(element => {
        const {_id, Material, Posicion, Marca, Precio, Stock} = element
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
                <th>MATERIAL</th>
                <th>POSICION</th>
                <th>MARCA</th>
                <th>PRECIO</th>
                <th>STOCK</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Material}</td>
                <td>${Posicion}</td>
                <td>${Marca}</td>
                <td>${Precio}</td>
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
                <th>MATERIAL</th>
                <th>POSICION</th>
                <th>MARCA</th>
                <th>PRECIO</th>
                <th>STOCK</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Material}</td>
                <td>${Posicion}</td>
                <td>${Marca}</td>
                <td>${Precio}</td>
                <td>${Stock}</td>
            </tr>` 
        }
    });
}

const formulario = document.getElementById('formularioVarios');
formulario.addEventListener("submit", postDatos);


function postDatos(e){
  e.preventDefault();
  const Material = document.querySelector('#Material').value;
  const Posicion = document.querySelector('#Posicion').value;
  const Precio  = document.querySelector('#Precio').value;
  const Marca = document.querySelector('#Marca').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Material,
    Posicion,
    Precio,
    Marca,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postPastillasFreno(registro)
  }else{
    console.log("Hubo un error en la validación de datos. Intenta nuevamente.");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_PastillasFreno = e.target.getAttribute("id");
        console.log(id_PastillasFreno);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deletePastillasFreno(id_PastillasFreno);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_PastillasFreno = e.target.getAttribute("id");
        const datos = await getPastillasFrenoOne(id_PastillasFreno);
        console.log(datos);
        const Material = document.querySelector("#MaterialEdit");
        const Posicion = document.querySelector("#PosicionEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Marca = document.querySelector("#MarcaEdit");
        const Stock = document.querySelector("#StockEdit");
        Material.value = datos.Material;
        Posicion.value = datos.Posicion;
        Marca.value = datos.Marca;
        Precio.value = datos.Precio;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Material = document.querySelector("#MaterialEdit").value
            const Posicion = document.querySelector("#PosicionEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Marca = document.querySelector("#MarcaEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Material,
                Posicion,
                Precio,
                Marca,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updPastillasFrenoOne(datosUpd, id_PastillasFreno);
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