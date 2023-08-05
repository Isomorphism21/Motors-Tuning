const urlAll = "http://localhost:8001/api/Carburadores/all";
const urlPost = "http://localhost:8001/api/Carburadores/add";
const urlDelete = "http://localhost:8001/api/Carburadores/del";
const urlUpd = "http://localhost:8001/api/Carburadores/upd";
const urlGetOne = "http://localhost:8001/api/Carburadores/one";
const urlGetOneUsuario = "http://localhost:8001/api/Usuarios/One";

export const getCarburadoresAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postCarburadores = async (objeto) => {
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

export const deleteCarburadores = async (id_Carburadores) => {
    try {
            await fetch(`${urlDelete}/${id_Carburadores}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getCarburadoresOne = async (id_Carburadores) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Carburadores}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updCarburadoresOne = async (objeto, id_Carburadores) => {
    try {
        await fetch(`${urlUpd}/${id_Carburadores}`,{
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