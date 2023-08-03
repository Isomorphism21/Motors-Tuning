const urlAll = "http://localhost:8001/api/PastillasFreno/all";
const urlPost = "http://localhost:8001/api/PastillasFreno/add";
const urlDelete = "http://localhost:8001/api/PastillasFreno/del";
const urlUpd = "http://localhost:8001/api/PastillasFreno/upd";
const urlGetOne = "http://localhost:8001/api/PastillasFreno/one"

export const getPastillasFrenoAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postPastillasFreno = async (objeto) => {
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

export const deletePastillasFreno = async (id_PastillasFreno) => {
    try {
            await fetch(`${urlDelete}/${id_PastillasFreno}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getPastillasFrenoOne = async (id_PastillasFreno) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_PastillasFreno}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updPastillasFrenoOne = async (objeto, id_PastillasFreno) => {
    try {
        await fetch(`${urlUpd}/${id_PastillasFreno}`,{
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

