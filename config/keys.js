import dotenv from "dotenv";
dotenv.config();
export const keys = {
  passport: {
    secretOrKey: process.env.SECRET_OR_KEY,
    expiresIn: 86400, // 1 day in seconds
  },
  env: {
    port: process.env.PORT || 8080,
    mongoDBUri: process.env.MONGO_URI,
  },
};
