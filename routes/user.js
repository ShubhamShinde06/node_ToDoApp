import express from "express";
import { register, login, getMyprofile, logout } from "../controllers/user.js";
import { isAuthenticates } from "../middlewares/auth.js";

const router = express.Router();

//router.get("/all",getAllUsers);
 
router.post("/new",register);
router.post("/login",login);

router.get("/logout",logout);

router.get("/me", isAuthenticates ,getMyprofile);

export default router;