import express from "express";
import { upload } from "../config/cloudinary.js";
import Archives from "../models/Archive.js";

const router = express.Router();

router.get("/archives", async (req, res) => {
  try {
    const archives = await Archives.find().sort({ createdAt: -1 });

    res.status(200).json({
      status: "success",
      data: { archives },
    });
  } catch (err) {
    console.error("Failed to get archives", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

router.get("/archives/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(401).json({
        status: "fail",
        message: "ID is missing or invalid",
      });
    }

    const archives = await Archives.findById(id);

    if (!archives) {
      return res.status(404).json({
        status: "fail",
        message: "Archives not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { archives },
    });
  } catch (err) {
    console.error("Failed to get Archives by id", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

router.post("/archives", upload.array("images", 8), async (req, res) => {
  try {
    if (!req.files) {
      res.status(401).json({
        status: "fail",
        message: "Image has not been included",
      });
    }

    const imageUrls = req.files.map((file) => file.path);
    const newArchives = await Archives.create({
      ...req.body,
      images: imageUrls,
      tech_stack: JSON.parse(req.body.tech_stack),
    });

    res.status(201).json({
      status: "success",
      message: "Archives successfully to add",
      data: { newArchives },
    });
  } catch (err) {
    console.error("Failed to add Archives", err);
    res.status(400).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

export default router;
