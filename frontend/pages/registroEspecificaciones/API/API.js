const url = "http://localhost:8001/api/Fechas/all";
const urlOne = "http://localhost:8001/api/Fechas/one";
const urlPost = "http://localhost:8001/api/Fechas/add";

export const getFechasAll = async () => {
    try {
        const extract = await fetch(url);
        const datos =  extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postFechas = async (objeto) => {
    try {
        fetch (urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers:{
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const getFechasOne = async (id_Fechas) => {
    try {
        const extract = await fetch(`${urlOne}/${id_Fechas}`);
        const datos = extract.json()
        return datos
    } catch (error) {
        console.log(error);
    }
}