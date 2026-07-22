import axios from 'axios';

// 138. Configure single Axios instance
const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual mock/backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 141. Request interceptor to attach Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const mockToken = 'YOUR_MOCK_TOKEN_HERE'; 
    config.headers.Authorization = `Bearer ${mockToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 140. Response interceptor: returns response.data and standardizes errors
apiClient.interceptors.response.use(
  (response) => {
    // Return data directly so components don't see the Axios wrapper
    return response.data;
  },
  (error) => {
    // Create a standardized error object
    const standardError = {
      message: error.response?.data?.message || 'Something went wrong',
      statusCode: error.response?.status || 500,
    };
    return Promise.reject(standardError);
  }
);

export default apiClient;