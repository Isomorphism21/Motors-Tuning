import {Router} from "express";
import { deletebandasDeFreno, getOnebandasDeFreno, getbandasDeFrenoAll, postbandasDeFreno, updbandasDeFreno } from "../controllers/bandasDeFreno.controllers.js";

const router = Router();

router.get("/all", getbandasDeFrenoAll);
router.post("/add", postbandasDeFreno);
router.delete("/del", deletebandasDeFreno);
router.patch("/upd", updbandasDeFreno);
router.get("/one", getOnebandasDeFreno);

export default router;