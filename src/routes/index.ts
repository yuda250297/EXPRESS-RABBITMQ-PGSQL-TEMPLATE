import express from 'express';
import userRoutes from './user-routes';

const router = express.Router();

router.use('/users', userRoutes);

// You can add more routes here as your application grows

export default router;