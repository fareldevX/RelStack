import { Schema, model } from "mongoose";

const archiveSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["project", "certification"],
      default: "project",
    },
    images: { type: [String], default: [] },
    name: String,
    description: String,
    tech_stack: { type: [String], default: [] },
    demo_url: String,
    github_url: String,
    issuer: String,
    issued_date: Date,
    expiry_date: Date,
    credential_id: String,
    credential_url: String,
  },
  {
    timestamps: true,
  },
);

export default model("Archive", archiveSchema);
