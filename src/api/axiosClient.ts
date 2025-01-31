import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base API URL
    timeout: 5000, // Request timeout (optional)
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosClient;