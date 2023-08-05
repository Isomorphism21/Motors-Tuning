import express from "express";
<<<<<<< HEAD
import {check} from "express-validator";
import validateDocument from "../middlewares/validate.documents.js";
import { getUserAll, postUser } from "../controllers/usuario.controllers.js";
import Role from "../models/Rol.model.js";



const router = express.Router();

router.post("/add", 
check('email', "el correo no es valido").isEmail(),
check('nombre', "el nombre esta vacio").not().isEmpty(),
check('password', "el password debe tener 6 caracteres").isLength({min: 6}),
/* check('rol', "El rol no existe").isIn(['ADMIN', 'USER']), */
check('rol').custom(async(rol='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}),
validateDocument
,postUser);
router.get("/all", getUserAll);
=======
import { getUsuarioAll, postUsuario } from "../controllers/usuario.controllers.js";
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
>>>>>>> 6d78d1a513ed4e1ee715bc76825897d0ed08f4fc

export default router;