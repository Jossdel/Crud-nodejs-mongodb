import { Router } from "express";
import postRouter from "./post.routes.js";
import { getRouter } from "./get.routes.js";

const router = Router();

router.use(postRouter);
router.use(getRouter);

export default router;
