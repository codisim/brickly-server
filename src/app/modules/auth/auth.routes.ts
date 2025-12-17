import auth from "../../middlewares/auth";
import { AuthController } from "./auth.controller";
import express from "express"

const router = express.Router();


router.get(
    "/me",
    // auth(validat ),
    AuthController.getMe
)

router.post(
    "/register",
    AuthController.Register
)


router.post(
    "/login",
    AuthController.login
)


export const authRoutes = router;
