import express from "express";
import {check} from "express-validator";
import { login } from "../controllers/auth.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = express.Router();

router.post("/login", 
check('email', 'falta el email').isEmail(),
check('password', 'el password tiene que tener mas de 6 caracteres').isLength({min:6}),
validateDocuments
,login)

export default router