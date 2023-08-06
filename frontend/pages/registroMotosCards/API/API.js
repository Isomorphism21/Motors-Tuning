const urlAll = "http://localhost:8001/api/MotosInfo/all";
const urlPost = "http://localhost:8001/api/MotosInfo/add";
const urlDel = "http://localhost:8001/api/MotosInfo/del";
const urlUpd = "http://localhost:8001/api/MotosInfo/upd";
const urlOne = "http://localhost:8001/api/MotosInfo/one";

export const getMotos = async () =>{
    try {
        const extract = await fetch(urlAll);
        const datos =  extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postMotos = async (objeto) =>{
    try {
        await fetch(urlPost, {
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

export const deleteMotos = async (id_Motos) => {
    try {
        await fetch(`${urlDel}/${id_Motos}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

export const updMotos = async (objeto, id_Motos) =>{
    try {
        await fetch(`${urlUpd}/${id_Motos}`, {
            method: "PATCH",
            body: JSON.stringify(objeto),
            headers:{
                "Content-Type":"application/json"
            }            
        })
    } catch (error) {
        console.log(error);
    }
}

export const getMotosOne = async (id_Motos) => {
    try {
        const extract = await fetch(`${urlOne}/${id_Motos}`);
        const datos = extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}