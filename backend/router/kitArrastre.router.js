import {Router} from "express";
import { deletekitArrastre, getOnekitArrastre, getkitArrastreAll, postkitArrastre, updatekitArrastre } from "../controllers/kitArrastre.controllers.js";

const router = Router();

router.get("/all", getkitArrastreAll);
router.post("/add", postkitArrastre);
router.delete("/del/:id", deletekitArrastre);
router.patch("/upd/:id", updatekitArrastre);
router.get("/one/:id", getOnekitArrastre);

export default router;