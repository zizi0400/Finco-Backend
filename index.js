import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import { createToken, verifyToken } from "./utils/jwt.js";

const port = process.env.PORT;
const app = express();
const uploud = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("I'm port", port);
});
