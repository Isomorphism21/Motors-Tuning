import express from "express";
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

export default router;