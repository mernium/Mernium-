import express from 'express';
import { submitForm } from '../controller/formController.js';
import { formRateLimiter } from '../middleware/rateLimit.js';

const router = express.Router();

router.post('/submit', formRateLimiter, submitForm);

export default router;