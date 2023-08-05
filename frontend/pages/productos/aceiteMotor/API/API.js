const urlAll = "http://localhost:8001/api/AceiteMotor/all";
const urlPost = "http://localhost:8001/api/AceiteMotor/add";
const urlDelete = "http://localhost:8001/api/AceiteMotor/del";
const urlUpd = "http://localhost:8001/api/AceiteMotor/upd";
const urlGetOne = "http://localhost:8001/api/AceiteMotor/one";
const urlGetOneUsuario = "http://localhost:8001/api/Usuarios/One";

export const getAceiteAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postAceite = async (objeto) => {
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

export const deleteAceite = async (id_Aceite) => {
    try {
            await fetch(`${urlDelete}/${id_Aceite}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getAceiteOne = async (id_Aceite) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Aceite}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updAceiteOne = async (objeto, id_Aceite) => {
    try {
        await fetch(`${urlUpd}/${id_Aceite}`,{
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