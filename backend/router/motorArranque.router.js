import {Router} from "express";
import { deletemotorArranque, getOnemotorArranque, getmotorArranqueAll, postmotorArranque, updatemotorArranque } from "../controllers/motorArranque.controllers.js";

const router = Router();

router.get("/all", getmotorArranqueAll);
router.post("/add",postmotorArranque);
router.delete("/del/:id", deletemotorArranque);
router.patch("/upd/:id", updatemotorArranque);
router.get("/one/:id", getOnemotorArranque);

export default router