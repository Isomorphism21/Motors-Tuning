import express from "express";
import { getFacturaAll, postFactura } from "../controllers/facturas.controller.js";

const router = express.Router();

router.get("/one/:id", getFacturaAll);
router.post("/add", postFactura);

export default router;