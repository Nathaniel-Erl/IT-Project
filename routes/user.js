import express from "express";
import { login, signup } from "../controllers/userController.js";

const router = express.Router();

router.post("/", login);

router.post("/signup", signup);

router.get("/settings", (req, res) => {
  res.json({ message: "User settings " });
});
export default router;
