const urlAll = "http://localhost:8001/api/MotorArranque/all";
const urlPost = "http://localhost:8001/api/MotorArranque/add";
const urlDelete = "http://localhost:8001/api/MotorArranque/del";
const urlUpd = "http://localhost:8001/api/MotorArranque/upd";
const urlGetOne = "http://localhost:8001/api/MotorArranque/one"

export const getMotorArranqueAll = async () => {
    try {
        const extract = await fetch(urlAll);
        const datos = await extract.json();
        return datos
    } catch (error) {
        console.log(error);
    }
}

export const postMotorArranque = async (objeto) => {
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

export const deleteMotorArranque = async (id_MotorArranque) => {
    try {
            await fetch(`${urlDelete}/${id_MotorArranque}`,{
                method: "DELETE"
            })
            window.location = "index.html"
    } catch (error) {
        console.log(error);
    }
}

export const getMotorArranqueOne = async (id_MotorArranque) => {
    try {
        const extract = await fetch(`${urlGetOne}/${id_MotorArranque}`);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const updMotorArranqueOne = async (objeto, id_MotorArranque) => {
    try {
        await fetch(`${urlUpd}/${id_MotorArranque}`,{
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

