"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubConfig = void 0;
exports.githubConfig = {
    clientID: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    callbackURL: "http://localhost:3000/auth/github/callback",
};
