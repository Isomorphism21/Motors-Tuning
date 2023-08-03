import {Router} from "express";
import { deleteAceiteMotor, getAceiteMotorAll, getOneAceiteMotor, postAceiteMotor, updAceiteMotor } from "../controllers/aceiteMotor.controller.js";

const router = Router();

router.get("/all", getAceiteMotorAll);
router.post("/add", postAceiteMotor);
router.delete("/del/:id", deleteAceiteMotor);
router.patch("/upd/:id", updAceiteMotor);
router.get("/one/:id", getOneAceiteMotor);

export default router;