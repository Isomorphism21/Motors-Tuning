const urlAll = "http://localhost:8001/api/Llantas/all";
const urlPost = "http://localhost:8001/api/Llantas/add";
const urlDelete = "http://localhost:8001/api/Llantas/del";
const urlUpd = "http://localhost:8001/api/Llantas/upd";
const urlGetOne = "http://localhost:8001/api/Llantas/one";
const urlGetOneUsuario = "http://localhost:8001/api/Usuarios/One";

export const getLlantasAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postLlantas = async (objeto) => {
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

export const deleteLlantas = async (id_Llantas) => {
    try {
            await fetch(`${urlDelete}/${id_Llantas}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getLlantasOne = async (id_Llantas) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Llantas}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updLlantasOne = async (objeto, id_Llantas) => {
    try {
        await fetch(`${urlUpd}/${id_Llantas}`,{
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