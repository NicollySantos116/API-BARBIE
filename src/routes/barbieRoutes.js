import express from "express";
import { createBarbie, deleteBarbie, getAllBarbies, getBarbieById } from "../controllers/barbieController.js";

const  router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbieById);
router.post("/", createBarbie);
router.delete("/:id", deleteBarbie);

export default router;