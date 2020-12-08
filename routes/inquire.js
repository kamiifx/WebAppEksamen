import {inquireController, officeController} from "../controllers/index.js";

import express from "express";
import {authentication} from "../middleware/auth.js";

const router = express.Router();

router.post('/', authentication, inquireController.create);
export default router;