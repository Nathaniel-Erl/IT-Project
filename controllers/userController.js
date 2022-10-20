import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { keys } from "../config/keys.js";
import User from "../models/userSchema.js";

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user in database
  const user = await User.findOne({ email });
  // Check if user exists
  if (!user) {
    return res.status(404).json({ emailnotfound: "Email not found" });
  }
  // Check password
  await bcrypt.compare(password, user.password).then((isPasswordMatched) => {
    if (isPasswordMatched) {
      // Create JWT Payload
      const payload = {
        id: user["_id"],
        email: user.email,
      };
      // Sign token
      const token = jwt.sign(payload, keys.passport.secretOrKey, {
        expiresIn: keys.passport.expiresIn,
      });
      const bearer = "Bearer " + token;
      return res.status(200).json({
        result: user,
        token: bearer,
      });
    } else {
      // passwords do not match
      return res.status(400).json({ passwordincorrect: "Incorrect password" });
    }
  });
};

export const signup = async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  const lowerEmail = email.toLowerCase();
  try {
    // check that email and username are unique
    const usernameExists = await User.findOne({ userName: userName });
    const emailExists = await User.findOne({ email: lowerEmail });
    if (usernameExists) {
      console.log("username");
      res.status(400).json({ userNameError: "Username already exists" });
    } else if (emailExists) {
      console.log("email");
      res.status(400).json({ emailError: "Email already exists" });
    } else {
      // Username and email are unique
      // Hash the password to store in the database
      const hash = await bcrypt.hash(password, 10);
      // create a new user entry in the database
      const newUser = await User.create({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: lowerEmail,
        password: hash,
      });
      // create and sign token
      // Create JWT Payload
      const payload = {
        id: newUser["_id"],
        email: newUser.email,
      };
      // Sign token
      const token = jwt.sign(payload, keys.passport.secretOrKey, {
        expiresIn: keys.passport.expiresIn,
      });
      const bearer = "Bearer " + token;
      res.status(201).json({ result: newUser, token: bearer });
    }
  } catch (error) {
    console.log(error);
    res.send(req.body);

    return;
  }
};
