import express from "express";
import { addMessage } from "../controllers/contact.js";

const router = express.Router();

router.post("/contact", addMessage);

export default router;
