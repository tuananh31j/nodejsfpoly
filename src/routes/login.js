import loginController from "../app/controllers/LoginController"
import express from "express";


const router = express.Router();

router.get('/', loginController.index)

export default router;

