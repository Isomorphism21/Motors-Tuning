import {Router} from "express";
import { deleteAceiteMotor, getAceiteMotorAll, getOneAceiteMotor, postAceiteMotor, updAceiteMotor } from "../controllers/aceiteMotor.controller.js";

const router = Router();

router.get("/all", getAceiteMotorAll);
router.post("/add", postAceiteMotor);
router.delete("/del", deleteAceiteMotor);
router.patch("/upd", updAceiteMotor);
router.get("/one", getOneAceiteMotor);

export default router;