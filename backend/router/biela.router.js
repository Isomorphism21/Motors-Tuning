import {Router} from "express";
import { deleteBiela, getBielaAll, getOneBiela, postBiela, updateBiela } from "../controllers/biela.controllers.js";

const router = Router();

router.get("/all", getBielaAll);
router.post("/add", postBiela);
router.delete("/del", deleteBiela);
router.patch("/upd", updateBiela);
router.get("/one", getOneBiela);

export default router;