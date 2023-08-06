import express from "express";
import { deleteMotos, getMotosAll, getMotosOne, postMotos, updMotos } from "../controllers/motos.controller.js";

const router = express.Router();

router.get("/all", getMotosAll);
router.post("/add", postMotos);
router.delete("/del/:id", deleteMotos);
router.patch("/upd/:id", updMotos);
router.get("/one/:id", getMotosOne);

export default router;