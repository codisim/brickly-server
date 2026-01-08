import httpStatus from 'http-status';
import { prisma } from '../../shared/prisma';


const createProperty = async (payload: any): Promise<any> => {
    const result = await prisma.property.create({
        data: payload
    })

    return result;
}



export const PropertyService = {
    createProperty
}