import productController from "../app/controllers/ProductController"
import express from "express";


const router = express.Router();

router.use('/:slug', productController.show)

export default router;

