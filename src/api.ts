// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ACCESS_TOKEN } from './constants';

export const ws = new WebSocket(
    'ws://twitter-clone-backend-production-c76e.up.railway.app/ws/social_media/',
);
ws.onopen = () => {
    console.log('Connected to WebSocket');
    const token = localStorage.getItem(ACCESS_TOKEN);
    ws.send(
        JSON.stringify({
            action: 'auth',
            data: token,
        }),
    );
};
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data);
    console.log(event);
};
ws.onclose = () => console.log('WebSocket disconnected');

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default api;
