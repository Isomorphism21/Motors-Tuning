import {Router} from "express";
import { deletecarburadores, getOnecarburadores, getcarburadoresAll, postcarburadores, updatecarburadores } from "../controllers/caburadores.controllers.js";

const router = Router();

router.get("/all", getcarburadoresAll);
router.post("/add", postcarburadores);
router.delete("/del", deletecarburadores);
router.patch("/upd", updatecarburadores);
router.get("/one", getOnecarburadores);

export default router;