import express from "express";
import User from "../models/userSchema.js";
import passport from "passport";
import { login, signup } from "../controllers/userController.js";

const router = express.Router();

// for testing the authorization of a user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find({}, (err, result) => {
      res.status(200).json({ data: result });
    });
  }
);

router.post("/", login)

router.post("/signup", signup)

router.get("/settings", (req, res) => {
  res.json({ message: "User settings " });
});

export default router;
