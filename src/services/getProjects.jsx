import axios from 'axios';

// Read API base URL from Vite env. Must be defined in .env as VITE_BASE_URL=...
const BASE_URL = import.meta.env.VITE_BASE_URL;
if (!BASE_URL) {
    // Helpful error to catch misconfigured env (falls back to current origin = localhost)
    console.error('Missing VITE_BASE_URL. Define it in your .env (e.g., VITE_BASE_URL="http://103.75.198.210:8080/api/") and restart Vite.');
}

// Create an Axios instance with the base URL from config
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export default async () => {
    try {
        const response = await apiClient.get('projects');
        console.log(response?.data);
        return response?.data;
    } catch (error) {
        console.error('API Error:', error.message);
    }
}