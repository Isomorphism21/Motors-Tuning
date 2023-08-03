import {Router} from "express";
import { deletecarburadores, getOnecarburadores, getcarburadoresAll, postcarburadores, updatecarburadores } from "../controllers/caburadores.controllers.js";

const router = Router();

router.get("/all", getcarburadoresAll);
router.post("/add", postcarburadores);
router.delete("/del/:id", deletecarburadores);
router.patch("/upd/:id", updatecarburadores);
router.get("/one/:id", getOnecarburadores);

export default router;