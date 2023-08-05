const urlAll = "http://localhost:8001/api/SistemaIgnicion/all";
const urlPost = "http://localhost:8001/api/SistemaIgnicion/add";
const urlDelete = "http://localhost:8001/api/SistemaIgnicion/del";
const urlUpd = "http://localhost:8001/api/SistemaIgnicion/upd";
const urlGetOne = "http://localhost:8001/api/SistemaIgnicion/one";
const urlGetOneUsuario = "http://localhost:8001/api/Usuarios/One";

export const getSistemaIgnicionAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postSistemaIgnicion = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const deleteSistemaIgnicion = async (id_SistemaIgnicion) => {
    try {
            await fetch(`${urlDelete}/${id_SistemaIgnicion}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getSistemaIgnicionOne = async (id_SistemaIgnicion) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_SistemaIgnicion}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updSistemaIgnicionOne = async (objeto, id_SistemaIgnicion) => {
    try {
        await fetch(`${urlUpd}/${id_SistemaIgnicion}`,{
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
} 

export const getUsuarioOne = async (idUsuario) => {
    try {
        const extract = await fetch(`${urlGetOneUsuario}/${idUsuario}`);
        const datos = extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}