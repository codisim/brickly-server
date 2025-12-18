import { UserController } from "./profile.controller";
import express from "express"
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/enums";

const router = express.Router()


router.get(
    "/me",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.AGENT, UserRole.USER),
    UserController.getMyProfile
)

router.patch(
    "/me",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.AGENT, UserRole.USER),
    UserController.updateMyProfile
)


export const profileRoutes = router;
