"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleConfig = void 0;
exports.googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    callbackURL: "http://localhost:3000/auth/google/callback",
};
