import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { githubConfig } from "../config/github";
import { googleConfig } from '../config/google';

let users: any[] = []; 

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

//Github Strategy
passport.use(
  new GitHubStrategy(
    githubConfig,
    (profile:any, done:any) => {
      let user = users.find((u) => u.id === profile.id);
      if (!user) {
        user = {
          id: profile.id,
          displayName: profile.displayName,
        };
        users.push(user);
      }
      done(null, user);
    }
  )
);


//Google Strategy
passport.use(
  new GoogleStrategy(
    googleConfig,
    (  profile:any, done: any) => {
      let user = users.find((u) => u.id === profile.id);
      if (!user) {
        user = {
          id: profile.id,
          displayName: profile.displayName,
        };
        users.push(user);
      }
      done(null, user);
    }
  )
);

export default passport;


