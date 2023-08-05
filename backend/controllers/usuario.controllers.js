import Usuario from "../models/Usuarios.models.js";
import bcryptjs from "bcryptjs";


const getUsuarioAll = async (req, res) =>{
    try {
        const datos = await Usuario.find();
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

const postUsuario = async (req, res) => {
    try {

        const {nombre, email, password, rol} = req.body;
        const usuario = new Usuario({nombre, email, password, rol});
        //Verificar si el corre ya existe
        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: "Email ya esta registrado"
            })
        }
        //Encriptado de contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getUsuarioOne = async(req, res) => {
    try {
        const datos = await Usuario.findOne({_id:req.params.id})
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsuarioAll,
    postUsuario,
    getUsuarioOne
}