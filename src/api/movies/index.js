import { Movie } from '@mui/icons-material';
import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
}));

export default router;