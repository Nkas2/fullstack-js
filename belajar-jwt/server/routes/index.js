import express from "express";
import { getUsers, login, logout, register } from "../controller/Users.js";
import { verifyToken } from "../middleware/verivyToken.js";
import { refreshToken } from "../controller/refreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", register);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", logout);

export default router;
