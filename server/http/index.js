const axios = require('axios');
const tokenService = require('../service/token-service');

const $amadeusApi = axios.create({
    withCredentials: true
})

$amadeusApi.interceptors.request.use(async (config) => {
    const token = await tokenService.getToken();

    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

$amadeusApi.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;

        try {
            await tokenService.generateToken();

            return $amadeusApi.request(originalRequest);
        } catch (e) {
            console.log('Не авторизован');
        }
    }
    throw error;
})

module.exports = $amadeusApi;