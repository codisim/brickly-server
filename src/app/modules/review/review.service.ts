import { prisma } from '../../shared/prisma';



const createReview = async (payload: any): Promise<any> => {
    const result = await prisma.review.create({
        data: payload
    })

    return result;
}   


export const ReviewService = {
    createReview
}