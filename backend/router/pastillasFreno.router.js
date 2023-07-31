import {Router} from "express";
import { deletepastillasFreno, getOnepastillasFreno, getpastillasFrenoAll, postpastillasFreno, updatepastillasFreno } from "../controllers/pastillasFreno.controlles.js";

const router = Router();

router.get("/all", getpastillasFrenoAll);
router.post("/add", postpastillasFreno);
router.delete("/del", deletepastillasFreno);
router.patch("/upd", updatepastillasFreno);
router.get("/one", getOnepastillasFreno);

export default router;