const urlAll = "http://localhost:8001/api/Bujias/all";
const urlPost = "http://localhost:8001/api/Bujias/add";
const urlDelete = "http://localhost:8001/api/Bujias/del";
const urlUpd = "http://localhost:8001/api/Bujias/upd";
const urlGetOne = "http://localhost:8001/api/Bujias/one"

export const getBujiasAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postBujias = async (objeto) => {
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

export const deleteBujias = async (id_Bujias) => {
    try {
            await fetch(`${urlDelete}/${id_Bujias}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getBujiasOne = async (id_Bujias) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Bujias}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updBujiasOne = async (objeto, id_Bujias) => {
    try {
        await fetch(`${urlUpd}/${id_Bujias}`,{
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

