// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ACCESS_TOKEN } from './constants';
import axios from 'axios';

export const ws = new WebSocket(
    'wss://kevincabral7.pythonanywhere.com/ws/social_media/',
);
ws.onopen = () => {
    console.log('Connected to WebSocket');
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        ws.send(
            JSON.stringify({
                action: 'auth',
                data: token,
            }),
        );
    }
};
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received data:', data);
    console.log(event);
};
ws.onclose = () => console.log('WebSocket disconnected');

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
