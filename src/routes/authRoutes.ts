import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

// Register a new user endpoint /auth/register
// router.post("/register", authController.register);

// Login endpoint /auth/login
router.post("/login", authController.login);

// Logout endpoint /auth/logout
router.post("/logout", authController.logout);

export default router;
