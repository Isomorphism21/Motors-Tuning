const urlAll = "http://localhost:8001/api/Bielas/all";
const urlPost = "http://localhost:8001/api/Bielas/add";
const urlDelete = "http://localhost:8001/api/Bielas/del";
const urlUpd = "http://localhost:8001/api/Bielas/upd";
const urlGetOne = "http://localhost:8001/api/Bielas/one"

export const getBielasAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postBielas = async (objeto) => {
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

export const deleteBielas = async (id_Bielas) => {
    try {
            await fetch(`${urlDelete}/${id_Bielas}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getBielasOne = async (id_Bielas) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_Bielas}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updBielasOne = async (objeto, id_Bielas) => {
    try {
        await fetch(`${urlUpd}/${id_Bielas}`,{
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

