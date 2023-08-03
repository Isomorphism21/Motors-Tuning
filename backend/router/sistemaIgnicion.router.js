import {Router} from "express";
import { deletesistemaIgnicion, getOnesistemaIgnicion, getsistemaIgnicionAll, postsistemaIgnicion, updatesistemaIgnicion } from "../controllers/sistemaIgnicion.controller.js";

const router = Router();

router.get("/all", getsistemaIgnicionAll);
router.post("/add", postsistemaIgnicion);
router.delete("/del/:id", deletesistemaIgnicion);
router.patch("/upd/:id", updatesistemaIgnicion);
router.get("/one/:id", getOnesistemaIgnicion);

export default router;