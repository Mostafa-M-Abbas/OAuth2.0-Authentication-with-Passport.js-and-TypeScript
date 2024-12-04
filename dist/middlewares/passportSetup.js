"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_github2_1 = require("passport-github2");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const github_1 = require("../config/github");
const google_1 = require("../config/google");
let users = [];
// Serialize and deserialize user
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((id, done) => {
    const user = users.find((u) => u.id === id);
    done(null, user);
});
//Github Strategy
passport_1.default.use(new passport_github2_1.Strategy(github_1.githubConfig, (accessToken, refreshToken, profile, done) => {
    let user = users.find((u) => u.id === profile.id);
    if (!user) {
        user = {
            id: profile.id,
            displayName: profile.displayName,
        };
        users.push(user);
    }
    done(null, user);
}));
//Google Strategy
passport_1.default.use(new passport_google_oauth20_1.Strategy(google_1.googleConfig, (accessToken, refreshToken, profile, done) => {
    let user = users.find((u) => u.id === profile.id);
    if (!user) {
        user = {
            id: profile.id,
            displayName: profile.displayName,
        };
        users.push(user);
    }
    done(null, user);
}));
