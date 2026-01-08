import { prisma } from '../../shared/prisma';



const createReview = async (payload: any): Promise<any> => {
    const result = await prisma.review.create({
        data: payload
    })

    return result;
}


const getAllReviewsByProductId = async (productId: string): Promise<any[]> => {
    const results = await prisma.review.findMany({
        where: {
            id: productId
        }
    });
    return results;
}


const getAllReviewsByUserId = async (userId: string): Promise<any[]> => {
    const results = await prisma.review.findMany({
        where: {
            userId: userId
        }
    });
    return results;
}




export const ReviewService = {
    createReview,
    getAllReviewsByProductId,
    getAllReviewsByUserId
}