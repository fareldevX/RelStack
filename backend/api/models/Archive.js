import { Schema, model } from "mongoose";

const archiveSchema = new Schema(
  {
    images: { type: [String], default: [] },
    archive_name: String,
    description: String,
    category: String,
    tech_stack: { type: [String], default: [] },
    github: String,
    demo: String,
  },
  {
    timestamps: true,
  },
);

export default model("Archive", archiveSchema);
