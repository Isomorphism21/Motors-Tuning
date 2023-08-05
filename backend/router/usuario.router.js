import express from "express";
import { getUsuarioAll, getUsuarioOne, postUsuario } from "../controllers/usuario.controllers.js";
import {check} from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js";
import Role from "../models/Role.js";

const router = express.Router();

router.get("/all", getUsuarioAll);
router.post("/add",[
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es valido').isEmail(),
    check('password', 'Password debe ser de minimo 6 caracteres').isLength({min: 6}),
    /* check('rol', 'No es un rol valido').isIn(['ADMIN','USER']), */
    check('rol').custom(async(rol='')=>{
        const existeRol = await Role.findOne({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
        }
    }),
    validateDocuments   
],postUsuario);
router.get("/one/:id", getUsuarioOne)

export default router;