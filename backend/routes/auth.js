import express from "express";
import { register, login,  resetPassword } from "../controllers/authController.js";

const router = express.Router();


router.post("/auth/register", register);
router.post("/auth/login", login);
router.put("/auth/reset-password/:id", resetPassword);

export default router;
