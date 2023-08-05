import {response} from "express"
import Usuario from "../models/Usuarios.models.js";
import bcryptjs from "bcryptjs"
import generateJWT from "../helpers/generate.JWT.js";

const login = async (req, res=response) => {
    const {email, password} = req.body;
    try {
        //Verificar si existe el Email en la base de datos
        const existeEmail = await Usuario.findOne({email});
        if(!existeEmail){
            return res.status(400).json({
                msg:"el email no existe"
            })
        }

        //Verificar si el usuario esta activo
        if(existeEmail.estado === false){
            return res.status(400).json({
                msg:"el usuario no esta activo"
            })
        }

        //Verificar si el password es correcto y coincide con la llave
        const passwordValido = await bcryptjs.compare(password, existeEmail.password)
        if(!passwordValido){
            return res.json({ 
                message: 'Login no exitoso' 
            }); 
        }
        //Generacion para validacion de JWT
        const token = await generateJWT(existeEmail.id)
        res.json({
            existeEmail,
            token,
            success: true,
            message: 'Usuario Validado'
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    login
}