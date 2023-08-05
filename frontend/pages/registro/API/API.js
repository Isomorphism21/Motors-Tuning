const urlUser = "http://localhost:8001/api/Usuarios/add";

export const postUsers = async (objeto) => {
    try {
        await fetch(urlUser, {
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