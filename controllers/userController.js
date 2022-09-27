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
      return res.status(200).json({ result: user, token });
    } else {
      // passwords do not match
      return res.status(400).json({ passwordincorrect: "Incorrect password" });
    }
  });
};

export const signup = async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  try {
    // check that email and username are unique
    const usernameExists = await User.findOne({ userName });
    const emailExists = await User.findOne({ email });

    if (usernameExists) {
      res.status(400).json({ userNameError: "Username already exists" });
    } else if (emailExists) {
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
        email: email,
        password: hash,
      });
      res.status(201).json({ result: newUser });
      console.log(userName, firstName, lastName, email, hash);
    }
  } catch (error) {
    console.log(error);
    res.send(req.body);

    return;
  }
};
