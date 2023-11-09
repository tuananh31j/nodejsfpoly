import aboutController from "../app/controllers/AboutController"
import express from "express";


const router = express.Router();

router.get('/', aboutController.index)

export default router;

