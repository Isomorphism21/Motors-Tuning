<<<<<<< HEAD
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
=======
import Usuario from "../models/Usuarios.models.js";
import bcryptjs from "bcryptjs";


const getUsuarioAll = async (req, res) =>{
    try {
        const datos = await Usuario.find();
        res.json(datos)
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
    } catch (error) {
        console.log(error);
    }
}

<<<<<<< HEAD
const getUserAll = async (req, res) => {
    try {
        const datos = await Usuario.find();
        res.json(datos);
    } catch (error) {
        console.log(error);
=======
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
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
    }
}

export {
<<<<<<< HEAD
    postUser,
    getUserAll
=======
    getUsuarioAll,
    postUsuario
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc
}