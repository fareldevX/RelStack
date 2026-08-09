import express from "express";
import { upload } from "../config/cloudinary.js";
import { getArchives, addArchive } from "../controllers/archive.js";

const router = express.Router();

router
  .route("/archives")
  .get(getArchives)
  .post(upload.array("images"), addArchive);

export default router;
