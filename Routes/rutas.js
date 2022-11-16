import { Router } from "express";
import { CrearCarro, obtenerCarros } from "../Controllers/tutorialController.js";



const router = new Router();

router.get("/backend", obtenerCarros)
router.post("/crear", CrearCarro)

export default router