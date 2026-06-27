import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import archiveRoutes from "./routes/archive.js";
import contactRoutes from "./routes/contact.js";

const PORT = process.env.PORT;
const app = express();

dotenv.config();

app.use(
  cors({
    origin: ["https://rel-stack.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/", archiveRoutes);
app.use("/contact", contactRoutes);

export default app;
