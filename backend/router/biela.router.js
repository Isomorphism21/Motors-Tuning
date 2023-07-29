import {Router} from "express";
import { getBielaAll, postBiela } from "../controllers/biela.controllers.js";

const router = Router();

router.get("/all", getBielaAll);
router.post("/new", postBiela);

export default router;