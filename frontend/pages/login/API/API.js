const ulrGet = "http://localhost:8001/api/Auth/login";

export const postLogin = async (objeto) => {
    try {
        await fetch(ulrGet,{
            method: "POST",
            body: JSON.stringify(objeto),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
            if (data.success) {
                alert(data.message); 
                // Guardar información del usuario en el localStorage
                localStorage.setItem('loggedInUser', JSON.stringify({ email: data.email }));
                window.location.href = "../gestor/index.html"
            } else {
                alert("usuario no valido"); 
            }
            
        })
    } catch (error) {
        console.log(error);
    }
}