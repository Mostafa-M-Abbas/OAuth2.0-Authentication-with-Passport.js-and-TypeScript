"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const express_1 = require("express");
const router = (0, express_1.Router)();
//Github Routes
router.get("/github", passport_1.default.authenticate("github"));
router.get("/github/callback", passport_1.default.authenticate("github", { failureRedirect: "/" }), (req, res) => {
    res.send(`Hello ${req.user}`);
});
//Google Routes
router.get("/google", passport_1.default.authenticate("google"));
router.get("/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    res.send(`Hello ${req.user}`);
});
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("/");
    });
});
exports.default = router;
