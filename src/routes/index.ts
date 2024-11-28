
import * as express from "express";
import handleLogin from "../controllers/auth/login.controller";
const router = express.Router();

// example routes
router.post("/sign-in", handleLogin);

export default router;