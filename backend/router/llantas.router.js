import {Router} from "express";
import { deletellantas, getOnellantas, getllantasAll, postllantas, updatellantas } from "../controllers/llantas.controllers.js";

const router = Router();

router.get("/all", getllantasAll);
router.post("/add", postllantas);
router.delete("/del/:id", deletellantas);
router.patch("/upd/:id", updatellantas);
router.get("/one/:id", getOnellantas);

export default router;
