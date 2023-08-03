import {Router} from "express";
import { deletepastillasFreno, getOnepastillasFreno, getpastillasFrenoAll, postpastillasFreno, updatepastillasFreno } from "../controllers/pastillasFreno.controlles.js";

const router = Router();

router.get("/all", getpastillasFrenoAll);
router.post("/add", postpastillasFreno);
router.delete("/del/:id", deletepastillasFreno);
router.patch("/upd/:id", updatepastillasFreno);
router.get("/one/:id", getOnepastillasFreno);

export default router;