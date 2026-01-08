import express from "express"
import { ReviewController } from "./review.controller";

const router = express.Router();

router.post(
    "/",
    ReviewController.createReview
)

export const reviewRoutes = router;;