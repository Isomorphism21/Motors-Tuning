import { getBandasDeFrenoAll, postBandasDeFreno, deleteBandasDeFreno, updBandasDeFrenoOne, getBandasDeFrenoOne, getUsuarioOne } from "./API/API.js";

addEventListener("DOMContentLoaded", iniciar())

async function iniciar(){
    const token = localStorage.getItem('token');
    const oneUsuario = parseJwt(token); 
    const usuarioId = oneUsuario.uid
    console.log(usuarioId);
    const datos = await getBandasDeFrenoAll();
    const rolUsuario = await getUsuarioOne(usuarioId);
    console.log(datos);
    const tablas = document.querySelector(".listadoProductos");
    const thead = document.querySelector(".thead");
    const boton = document.querySelector(".titulo2");
    datos.forEach(element => {
        const {_id, Marca, TipoDeUnion, Espesor, Precio, Diametro, Stock} = element;
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
                <th>TIPODEUNION</th>
                <th>ESPESOR</th>
                <th>PRECIO</th>
                <th>DIAMETRO</th>
                <th>STOCK</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${TipoDeUnion}</td>
                <td>${Espesor}</td>
                <td>${Precio}</td>
                <td>${Diametro}</td>
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
                <th>TIPODEUNION</th>
                <th>ESPESOR</th>
                <th>PRECIO</th>
                <th>DIAMETRO</th>
                <th>STOCK</th>
            </tr>
            `
            tablas.innerHTML += `
            <tr>
                <th scope="row">${_id}</th>
                <td>${Marca}</td>
                <td>${TipoDeUnion}</td>
                <td>${Espesor}</td>
                <td>${Precio}</td>
                <td>${Diametro}</td>
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
  const TipoDeUnion = document.querySelector('#TipoDeUnion').value;
  const Precio  = document.querySelector('#Precio').value;
  const Espesor = document.querySelector('#Espesor').value;
  const Diametro = document.querySelector('#Diametro').value;
  const Stock  = document.querySelector('#Stock').value;
  
  const registro = {
    Marca,
    TipoDeUnion,
    Espesor,
    Precio,
    Diametro,
    Stock
  }
  console.log(registro);

  if(validation(registro)){
    postBandasDeFreno(registro)
  }else{
    console.log("nop");
  }
}

//DELETE
const laTabla = document.querySelector(".listadoProductos");
laTabla.addEventListener("click", detectarID);

async function detectarID(e){
    if(e.target.classList.contains("delete")){
        const id_BandasDeFreno = e.target.getAttribute("id");
        console.log(id_BandasDeFreno);
        const confir = confirm("¿Seguro que deseas eliminar el dato?")
        if(confir){
            deleteBandasDeFreno(id_BandasDeFreno);
        }
    }

    if(e.target.classList.contains("edit")){
        e.preventDefault();
        const id_BandasDeFreno = e.target.getAttribute("id");
        const datos = await getBandasDeFrenoOne(id_BandasDeFreno);
        console.log(datos);
        const Marca = document.querySelector("#MarcaEdit");
        const TipoDeUnion = document.querySelector("#TipoDeUnionEdit");
        const Precio = document.querySelector("#PrecioEdit");
        const Espesor = document.querySelector("#EspesorEdit");
        const Diametro = document.querySelector("#DiametroEdit");
        const Stock = document.querySelector("#StockEdit");
        Marca.value = datos.Marca;
        TipoDeUnion.value = datos.TipoDeUnion;
        Espesor.value = datos.Precio;
        Precio.value = datos.Espesor;
        Diametro.value = datos.Diametro;
        Stock.value = datos.Stock;

        const formularioEdit = document.querySelector("#formularioEdit");
        formularioEdit.addEventListener("submit", updEquipo);
        function updEquipo(e){
            e.preventDefault();
            const Marca = document.querySelector("#MarcaEdit").value
            const TipoDeUnion = document.querySelector("#TipoDeUnionEdit").value
            const Precio = document.querySelector("#PrecioEdit").value
            const Espesor = document.querySelector("#EspesorEdit").value
            const Diametro = document.querySelector("#DiametroEdit").value
            const Stock = document.querySelector("#StockEdit").value

            const datosUpd = {
                Marca,
                TipoDeUnion,
                Precio,
                Espesor,
                Diametro,
                Stock
            }
            console.log(datosUpd);
            if(validation(datosUpd)){
                updBandasDeFrenoOne(datosUpd, id_BandasDeFreno);
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