const urlAll = "http://localhost:8001/api/KitArrastre/all";
const urlPost = "http://localhost:8001/api/KitArrastre/add";
const urlDelete = "http://localhost:8001/api/KitArrastre/del";
const urlUpd = "http://localhost:8001/api/KitArrastre/upd";
const urlGetOne = "http://localhost:8001/api/KitArrastre/one";
const urlGetOneUsuario = "http://localhost:8001/api/Usuarios/One";

export const getKitArrastreAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postKitArrastre = async (objeto) => {
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

export const deleteKitArrastre = async (id_KitArrastre) => {
    try {
            await fetch(`${urlDelete}/${id_KitArrastre}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getKitArrastreOne = async (id_KitArrastre) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_KitArrastre}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updKitArrastreOne = async (objeto, id_KitArrastre) => {
    try {
        await fetch(`${urlUpd}/${id_KitArrastre}`,{
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