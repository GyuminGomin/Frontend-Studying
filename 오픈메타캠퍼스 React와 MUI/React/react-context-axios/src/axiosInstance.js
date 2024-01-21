import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
});

instance.interceptors.request.use(config => {
    console.log('Request made:', config);
    return config;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log('Response received:', response);
    return response;
}, error => {
    return Promise.reject(error);
})

export default instance;