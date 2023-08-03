import {Router} from "express";
import { deletebandasDeFreno, getOnebandasDeFreno, getbandasDeFrenoAll, postbandasDeFreno, updbandasDeFreno } from "../controllers/bandasDeFreno.controllers.js";

const router = Router();

router.get("/all", getbandasDeFrenoAll);
router.post("/add", postbandasDeFreno);
router.delete("/del/:id", deletebandasDeFreno);
router.patch("/upd/:id", updbandasDeFreno);
router.get("/one/:id", getOnebandasDeFreno);

export default router;