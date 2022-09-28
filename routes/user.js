import express from "express";
import User from "../models/userSchema.js";
import passport from "passport";
import { login, signup } from "../controllers/userController.js";

const router = express.Router();

router.post("/", login);

router.post("/api/signup", signup);

router.get("/api/settings", (req, res) => {
  res.json({ message: "User settings " });
});

export default router;
