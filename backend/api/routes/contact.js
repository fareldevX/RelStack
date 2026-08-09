import express from "express";
import { addMessage } from "../controllers/contact.js";

const router = express.Router();

router.route("/contact").post(addMessage);

export default router;
