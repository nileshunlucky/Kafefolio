import express from 'express';
import { registerUser, loginUser,googleAuth } from '../controllers/auth.controller.js';

const router = express.Router();

// Authentication Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google', googleAuth);

export default router;