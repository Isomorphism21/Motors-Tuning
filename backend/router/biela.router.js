import {Router} from "express";
import { deleteBiela, getBielaAll, getOneBiela, postBiela, updateBiela } from "../controllers/biela.controllers.js";

const router = Router();

router.get("/all", getBielaAll);
router.post("/add", postBiela);
router.delete("/del/:id", deleteBiela);
router.patch("/upd/:id", updateBiela);
router.get("/one/:id", getOneBiela);

export default router;