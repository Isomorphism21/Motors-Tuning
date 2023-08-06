const urlOne = "http://localhost:8001/api/Fechas/one";
const urlPost = "http://localhost:8001/api/Fechas/add";
const urlUsuario = "http://localhost:8001/api/MotosInfo/one";

export const postFechas = async (objeto) => {
    try {
        await fetch (urlPost, {
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

export const getFechas = async (id_Fechas) => {
    try {
        const extract = await fetch(`${urlOne}/${id_Fechas}`);
        const datos = extract.json()
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const getUserMoto = async (id_Motos) => {
    try {
        const extract = await fetch(`${urlUsuario}/${id_Motos}`);
        const datos = extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}