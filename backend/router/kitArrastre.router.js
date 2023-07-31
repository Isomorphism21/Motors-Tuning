import {Router} from "express";
import { deletekitArrastre, getOnekitArrastre, getkitArrastreAll, postkitArrastre, updatekitArrastre } from "../controllers/kitArrastre.controllers.js";

const router = Router();

router.get("/all", getkitArrastreAll);
router.post("/add", postkitArrastre);
router.delete("/del", deletekitArrastre);
router.patch("/upd", updatekitArrastre);
router.get("/one", getOnekitArrastre);

export default router;