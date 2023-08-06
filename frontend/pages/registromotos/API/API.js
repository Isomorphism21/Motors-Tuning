const urlPost = "http://localhost:8001/api/MotosInfo/add";

export const postMotos = async (objeto) => {
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