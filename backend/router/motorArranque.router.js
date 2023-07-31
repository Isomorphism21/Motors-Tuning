import {Router} from "express";
import { deletemotorArranque, getOnemotorArranque, getmotorArranqueAll, postmotorArranque, updatemotorArranque } from "../controllers/motorArranque.controllers.js";

const router = Router();

router.get("/all", getmotorArranqueAll);
router.post("/add",postmotorArranque);
router.delete("/del", deletemotorArranque);
router.patch("/upd", updatemotorArranque);
router.get("/one", getOnemotorArranque);

export default router