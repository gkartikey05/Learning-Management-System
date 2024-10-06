import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import { isLoggedIn } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/me", isLoggedIn, getProfile);

export default router;
