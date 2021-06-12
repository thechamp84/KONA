import axios from 'axios';
// import { LocalStorage } from './LocalStorage';
const storage = new LocalStorage();

const axiosIns = axios.create({
    baseURL: "https://aaa.aaa.com/",
    headers: {}
});

axiosIns.interceptors.request.use(function (config) {
    // if (config.data) {
    //     config.data.deviceToken = 'webapp-react';
    // }
    const user = storage.get('user') || {};
    if (user.token) {
        config.headers['Authorization'] = user.token ? `Bearer ${user.token}` : undefined;
    }
    if (user.user_id) {
        config.headers['userId'] = user.user_id ? user.user_id : undefined;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosIns.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export { axiosIns };
