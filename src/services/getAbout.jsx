import axios from 'axios';
import 'dotenv/config';

// Create an Axios instance with the base URL from config
const apiClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000, // Set a timeout (5 seconds)
    headers: { 'Content-Type': 'application/json' }
});

export default async () => {
    try {
        const response = await apiClient.get('/about');
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.error('API Error:', error.message);
    }
}