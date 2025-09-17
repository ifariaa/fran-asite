import { config } from 'dotenv';
config();

// Ensure NEXT_PUBLIC_GEMINI_API_KEY is available for dev server
if (process.env.GEMINI_API_KEY && !process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  process.env.NEXT_PUBLIC_GEMINI_API_KEY = process.env.GEMINI_API_KEY;
}
