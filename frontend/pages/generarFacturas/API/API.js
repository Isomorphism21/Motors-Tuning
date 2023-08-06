const urlGetMotos = "http://localhost:8001/api/MotosInfo/one";
const urlGetUsuario = "http://localhost:8001/api/Usuarios/one";
const urlGetFactura = "http://localhost:8001/api/Facturas/one";
const urlPostFactura = "http://localhost:8001/api/Facturas/add";

export const traerMoto = async (id_moto) =>{
    try {
        const extract = await fetch(`${urlGetMotos}/${id_moto}`);
        const datos = extract.json();
        return datos
    } catch (error) {
        console.log();
    }
}

export const traerUsuario = async (id_moto) =>{
    try {
        const extract = await fetch(`${urlGetUsuario}/${id_moto}`);
        const datos = extract.json();
        return datos
    } catch (error) {
        console.log();
    }
}

export const traerFactura = async (id_moto) =>{
    try {
        const extract = await fetch(`${urlGetFactura}/${id_moto}`);
        const datos = extract.json();
        return datos
    } catch (error) {
        console.log();
    }
}

export const postFactura = async (objeto) => {
    try {
        await fetch(urlPostFactura, {
            method:"POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}