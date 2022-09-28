import { Strategy, ExtractJwt } from "passport-jwt";
import { keys } from "./keys.js";
import User from "../models/userSchema.js";

// configure passport middleware for user authentication
export const passportConfig = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = keys.passport.secretOrKey;
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findOne({ email: payload.email }, (err, user) => {
        if (err) return done(err, false);
        if (user) {
          return done(null, {
            email: user.email,
            id: user["_id"],
          });
        }
        return done(null, false);
      });
    })
  );
};
