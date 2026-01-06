import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import formRouter from './routes/formRouter.js';

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from root directory
dotenv.config({ path: join(__dirname, '..', '.env') });

// Validate required environment variables on startup
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('⚠️  WARNING: EMAIL_USER or EMAIL_PASSWORD not found in environment variables.');
    console.warn('   Please create a .env file in the root directory with:');
    console.warn('   EMAIL_USER=your-email@gmail.com');
    console.warn('   EMAIL_PASSWORD=your-app-password');
}


const app = express();
app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

app.use('/api/form', formRouter);
app.use('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});