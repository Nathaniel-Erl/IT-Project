import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import quizRoutes from "./routes/quiz.js";
import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/question.js"
import { passportConfig } from "./config/passport.js";
import { keys } from "./config/keys.js";

const app = express();

passportConfig(passport);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use("/", quizRoutes);

app.use("/", userRoutes);

app.use("/", questionRoutes);

const { port, mongoDBUri } = keys.env;
const CONNECTION_URL = mongoDBUri;

const PORT = process.env.PORT || port;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.messsage));
