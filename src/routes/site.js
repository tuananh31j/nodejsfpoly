import siteController from "../app/controllers/SiteController";
import express from "express";

const router = express.Router()

router.use('/search', siteController.search)
router.use('/', siteController.index)

export default router;

