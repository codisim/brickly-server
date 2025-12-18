import { prisma } from "../../shared/prisma";
import { UserStatus } from "../../../generated/client";
import { IJWTPayload } from "../../types/common";
import { TProfileUpdate } from "./profile.interface";



const getMyProfile = async (user: IJWTPayload) => {

    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: UserStatus.ACTIVE
        },
        select: {
            id: true,
            email: true,
            needPasswordChange: true,
            role: true,
            status: true
        }
    })

    return {
        ...userInfo
    }
}


const updateMyProfile = async (id: string, payload: TProfileUpdate) => {
    
    // const updateProfile = await prisma.user.update({
    //     where: {
    //         id,
    //         status: UserStatus.ACTIVE
    //     },
    //     data: payload
    // })

    // return updateProfile
}



export const UserService = {
    getMyProfile,
    updateMyProfile
}