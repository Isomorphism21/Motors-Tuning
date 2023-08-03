const urlAll = "http://localhost:8001/api/BandasDeFreno/all";
const urlPost = "http://localhost:8001/api/BandasDeFreno/add";
const urlDelete = "http://localhost:8001/api/BandasDeFreno/del";
const urlUpd = "http://localhost:8001/api/BandasDeFreno/upd";
const urlGetOne = "http://localhost:8001/api/BandasDeFreno/one"

export const getBandasDeFrenoAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postBandasDeFreno = async (objeto) => {
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

export const deleteBandasDeFreno = async (id_BandasDeFreno) => {
    try {
            await fetch(`${urlDelete}/${id_BandasDeFreno}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getBandasDeFrenoOne = async (id_BandasDeFreno) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_BandasDeFreno}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updBandasDeFrenoOne = async (objeto, id_BandasDeFreno) => {
    try {
        await fetch(`${urlUpd}/${id_BandasDeFreno}`,{
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

