import {Router} from "express";
import { deletesistemaIgnicion, getOnesistemaIgnicion, getsistemaIgnicionAll, postsistemaIgnicion, updatesistemaIgnicion } from "../controllers/sistemaIgnicion.controller.js";

const router = Router();

router.get("/all", getsistemaIgnicionAll);
router.post("/add", postsistemaIgnicion);
router.delete("/del", deletesistemaIgnicion);
router.patch("/upd", updatesistemaIgnicion);
router.get("/one", getOnesistemaIgnicion);

export default router;