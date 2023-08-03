import {Router} from "express";
import { deletebujias, getOnebujias, getbujiasAll, postbujias, updatebujias } from "../controllers/bujias.controllers.js";

const router = Router();

router.get("/all", getbujiasAll);
router.post("/add", postbujias);
router.delete("/del/:id", deletebujias);
router.patch("/upd/:id", updatebujias);
router.get("/one/:id", getOnebujias);

export default router;