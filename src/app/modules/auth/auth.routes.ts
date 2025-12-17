import { AuthController } from "./auth.controller";
import express from "express"

const router = express.Router();


router.get(
    "/me",
    AuthController.getMe
)

router.post(
    "/register",
    AuthController.login
)


router.post(
    "/login",
    AuthController.login
)


export const authRoutes = router;
