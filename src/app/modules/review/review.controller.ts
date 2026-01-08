import status from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";


const createReview = catchAsync(async (req: Request, res: Response) => {
    const reviewData = req.body;


    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Review created successfully",
        data: reviewData 
    })
})


export const ReviewController = {
    createReview
}