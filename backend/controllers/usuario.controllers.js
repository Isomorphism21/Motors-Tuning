import Usuario from "../models/Usuario.js";
import bcryptjs from "bcryptjs";


const postUser = async (req, res) => {
    try {
        const {nombre, email, rol, password} = req.body;
        const usuario = new Usuario({nombre, email, rol, password});

        //verificar si el correo existe
        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email esta registrado"
            })
        }

        //Encriptar Contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        await usuario.save();
        res.json({
            usuario
        })
    } catch (error) {
        console.log(error);
    }
}

const getUserAll = async (req, res) => {
    try {
        const datos = await Usuario.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    postUser,
    getUserAll
}