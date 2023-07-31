import {Router} from "express";
import { deletebujias, getOnebujias, getbujiasAll, postbujias, updatebujias } from "../controllers/bujias.controllers.js";

const router = Router();

router.get("/all", getbujiasAll);
router.post("/add", postbujias);
router.delete("/del", deletebujias);
router.patch("/upd", updatebujias);
router.get("/one", getOnebujias);

export default router;