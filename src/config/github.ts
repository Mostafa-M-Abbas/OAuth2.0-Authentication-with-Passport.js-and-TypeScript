import dotenv from "dotenv";
dotenv.config();

export const githubConfig = {
  clientID: process.env.GITHUB_CLIENT_ID || "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  callbackURL: "http://localhost:3000/auth/github/callback",
};
