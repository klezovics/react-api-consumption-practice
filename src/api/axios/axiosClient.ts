import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com"

const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 5000, // Request timeout (optional)
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosClient;