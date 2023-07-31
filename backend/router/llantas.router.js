import {Router} from "express";
import { deletellantas, getOnellantas, getllantasAll, postllantas, updatellantas } from "../controllers/llantas.controllers.js";

const router = Router();

router.get("/all", getllantasAll);
router.post("/add", postllantas);
router.delete("/del", deletellantas);
router.patch("/upd", updatellantas);
router.get("/one", getOnellantas);

export default router;
