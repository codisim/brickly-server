import express from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.routes';
import { profileRoutes } from '../modules/profile/profile.routes';
import { propertyRoutes } from '../modules/property/property.routes';
import { reviewRoutes } from '../modules/review/review.routes';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/profile',
        route: profileRoutes
    },
    {
        path: '/property',
        route: propertyRoutes
    },
    {
        path: '/review',
        route: reviewRoutes
    },
    // {
    //     path: '/meta',
    //     route: 'metaRoutes'
    // },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;