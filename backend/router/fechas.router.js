import express from "express";
import { deleteFecha, getFechaOne, getFechasAll, postFechas, updFecha } from "../controllers/fechas.controllers.js";

const router = express.Router();

router.get("/all", getFechasAll);
router.post("/add", postFechas);
router.delete("/del/:id", deleteFecha);
router.patch("/upd/:id", updFecha);
router.get("/one/:id", getFechaOne);

export default router;