export const getArchives = async (req, res) => {
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
};

export const addArchive = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Image has not been included",
      });
    }

    const imageUrls = req.files.map((file) => file.path);
    const tech_stack =
      typeof req.body.tech_stack === "string"
        ? JSON.parse(req.body.tech_stack)
        : req.body.tech_stack;

    const newArchives = await Archives.create({
      ...req.body,
      images: imageUrls,
      tech_stack,
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
};
